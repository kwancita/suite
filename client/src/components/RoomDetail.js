import { Link } from "react-router-dom"

function RoomDetail({currentUser, room, setRoom}) {
    const path = '/rooms'
    const bookingPath = currentUser ? "/bookings/new" : "/login"
    const { name, r_type, price, capacity, pets, breakfast, description, image  } = room

    return (
        <div>
            <img srC={image} alt={name} />
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
