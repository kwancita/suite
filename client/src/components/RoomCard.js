import { Link } from 'react-router-dom'
import "./room.css"

function RoomCard({room}) {
    const {name, r_type, price, image } = room
    const path = `/rooms/${room.id}`
    return (
        <div className="r-card">
            <div className="r-room">
                <div>
                    <Link to={path}>
                    <img 
                        className="r-img"
                        src={image} 
                        alt={name} 
                    />
                    </Link>
                </div>
                <div className="r-desc">
                    <h3>{name}</h3>
                    <span>{r_type}</span><br />
                    <span>${price}</span><br />
                    <Link to={path}><button className="r-btn">More Detail</button></Link>
                </div>
            </div>
            <hr className="r-hr" />
        </div>
    )
}

export default RoomCard
