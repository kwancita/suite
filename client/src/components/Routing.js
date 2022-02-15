import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Room from "./Room";
import Account from "./Account";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function Routing() {
    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        fetch("/rooms")
        .then((r)=>r.json())
        .then((setRooms))
    },[])

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/rooms" element={<Room rooms={rooms} />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/account" element={<Account/>} />
            </Routes>
        </div>
    )
}

export default Routing
