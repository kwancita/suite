import Booking from "./Booking"
import "./account.css"
import { Link } from "react-router-dom";

function Account({currentUser, bookings, setBookings}) {

    function handleupdate(updateBooking){
        const updateBookings = bookings.map((booking) => {
            if (booking.id === updateBooking.id){
                return updateBooking
            }else{
                return booking
            }
        });
        setBookings(updateBookings)
    }

    function handleDelete(id){
        const updateBookings = bookings.filter((booking) => booking.id !== id);
        setBookings(updateBookings)
    }

    return (
        <div className="ac-container">
            {currentUser? (
                <div>
                    <p>Hello, {currentUser.username}</p>
                    <h1>Your Booking</h1>
                    {bookings.map((booking)=>(
                        <Booking 
                            key={booking.id}
                            booking={booking}
                            onUpdate={handleupdate}
                            onDelete={handleDelete}
                    />
                ))}   
                </div>  
            ):(
                <p>Please <Link to="/login">login</Link> or <Link to="/signup">signup</Link></p>
            )}
            
        </div>
    )
}

export default Account
