import { Link } from 'react-router-dom'
// import "./room.css"

function RoomCard({room}) {
    const {name, r_type, price, image } = room
    const path = `/rooms/${room.id}`
    return (
        <div className="rc">
            <Link to={path}>
            <img 
                src={image} 
                alt={name} 
            />
            </Link>
            <Link to={path}><h3 >{name}</h3></Link>
            <p>{r_type}</p>
            <p>{price}</p>
            <Link to={path}><button>More Detail</button></Link>
        </div>
    )
}

export default RoomCard
