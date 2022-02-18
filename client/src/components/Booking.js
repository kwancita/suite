import { useState } from "react"
import Edit from "./Edit"
import "./booking.css"

function Booking({booking, onUpdate, onDelete}) {
    const {room, checkin_date, checkout_date, guest, total, stay} = booking
    console.log(booking)
    const [edit, setEdit] = useState(false)

    function handleDelete() {
        fetch(`/bookings/${booking.id}`, {
          method: "DELETE",
        })
        onDelete(booking.id)
    }

    return (
        <div className="b-main">
            <div className="b-div">
                <div className="b-desc">
                    <div>
                        <img className="b-img" src={room.image} alt={room.name} />
                    </div>
                    <div className="b-desc1">
                        <h4>{room.name}</h4>
                        <p><strong>Checkin Date:</strong>&nbsp;&nbsp;&nbsp;{checkin_date}</p>
                        <p><strong>Checkout Date:</strong>&nbsp;&nbsp;&nbsp;{checkout_date}</p>
                        <p><strong>Night:</strong>&nbsp;&nbsp;&nbsp;{stay}</p>
                        <p><strong>Guest:</strong>&nbsp;&nbsp;&nbsp;{guest}</p>
                        <p><strong>Total:</strong>&nbsp;&nbsp;&nbsp;${total}</p>
                    </div>
                </div>
                <div className="b-btn">
                    <button className="b-button" onClick={handleDelete}>🗑️</button>
                    <button className="b-button" onClick={()=>{setEdit(true)}}>✏️</button>
                    {edit && <Edit setEdit={setEdit} booking={booking} onUpdate={onUpdate} />}
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default Booking
