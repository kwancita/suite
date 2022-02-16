import RoomCard from "./RoomCard"
import "./room.css"

function Room({rooms}) {
    return (
        <div className="r-container">
            <h1>Our Room</h1>
            <div className="r-card">
                    {rooms.map((room)=>(
                        <RoomCard 
                            key={room.id}
                            room={room}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Room
