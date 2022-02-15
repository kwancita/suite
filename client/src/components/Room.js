import RoomCard from "./RoomCard"
// import "./room.css"

function Room({rooms}) {
    return (
        <div className="r">
            <div className="r-main"></div>
            <h1>Asian Cuisine NYC</h1>
            <div>
                <div>
                    {rooms.map((room)=>(
                        <RoomCard 
                            key={room.id}
                            room={room}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Room
