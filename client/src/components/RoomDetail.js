import { useEffect } from "react";
import { useParams, Link } from "react-router-dom"

function RoomDetail({currentUser, room, setRoom, handleAddbooking}) {
    const path = '/rooms'
    const { name, r_type, price, capacity, pets, breakfast, description, image  } = room
    const {id} = useParams();
    const bookingPath = currentUser ? `/${id}/bookings/new` : "/login"
    
    useEffect(()=>{
        fetch(`/rooms/${id}`)
        .then((r)=>r.json())
        .then((room)=>{
            setRoom(room);
        })
    },[setRoom, id])
    console.log(setRoom)

    return (
        <div>
            <img src={image} alt={name} />
            <span>{name}</span>
            <span>{r_type}</span>
            <span>{price}</span>
            <span>{capacity}</span>
            <span>{pets}</span>
            <span>{breakfast}</span>
            <p>{description}</p>
            <Link to={path}><button>See other room</button></Link>
            <Link to={bookingPath}><button>Book</button></Link>    
        </div>
    )
}

export default RoomDetail
