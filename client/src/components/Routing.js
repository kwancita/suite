import { Routes, Route } from "react-router-dom";
import About from "./About";
import Account from "./Account";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/account" element={<Account/>} />
            </Routes>
        </div>
    )
}

export default Routing
