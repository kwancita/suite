import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Room from "./Room";
import Account from "./Account";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import RoomDetail from "./RoomDetail";
import FormBooking from "./FormBooking";

function Routing({currentUser, setCurrentUser}) {
    const [rooms, setRooms] = useState([])
    const [room, setRoom] = useState({})
    const [bookings, setBookings] = useState([])

    useEffect(()=>{
        fetch("/rooms")
        .then((r)=>r.json())
        .then((setRooms))
    },[])

    useEffect(()=>{
        fetch("/bookings")
        .then((r)=>r.json())
        .then((setBookings))
    },[])

    function handleAddbooking(newBooking){
        setBookings([...bookings, newBooking])
    }

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/rooms" element={<Room rooms={rooms} />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/account" element={<Account currentUser={currentUser} bookings={bookings} setBookings={setBookings} />} />
                <Route path="/rooms/:id" element={<RoomDetail currentUser={currentUser} room={room} handleAddbooking={handleAddbooking} setRoom={setRoom} />} />
                <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} roomID={room.id}/>} />
                <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} roomID={room.id}/>} />
                <Route path="/:id/bookings/new" element={<FormBooking roomID={room.id} setRoom={setRoom} addBooking={handleAddbooking} currentUser={currentUser} room={room} />} />
            </Routes>
        </div>
    )
}

export default Routing
