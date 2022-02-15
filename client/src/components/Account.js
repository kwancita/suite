import Booking from "./Booking"

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
        <div><br/>
            Hello, {currentUser.username}
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
    )
}

export default Account
