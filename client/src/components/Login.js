import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function Login({currentUser, setCurrentUser, roomID}) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const path = `/rooms/${roomID}`
    const [formData, setFromData] = useState({
      username: "",
      password: "",
    });

    function handleChange(e){
      setFromData({
          ...formData,
          [e.target.name]: e.target.value
      });
    };

    function handleSubmit(e){
      e.preventDefault();

      const userData = {...formData};
      fetch("/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
      })
      .then((r) => {
          if (r.ok) {
              r.json().then((user) => {
                  setCurrentUser(user);
                  navigate(path)
                  setFromData({
                      username: "",
                      password: "",
                  });
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    return (
        <div>
          {currentUser?(
            <p>You already login</p>
          ):(
            <form onSubmit={handleSubmit}>
              <h2>Log In here</h2>
                  <input 
                      id="usernname-login"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleChange}
                  />
                  <input 
                      id="password-login"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                  />
                  <span>{errors}</span>
                  <button type="submit">Login</button>
                  <p>No account yet? <Link to="/signup">Sign Up</Link></p>
            </form>
          )}
        </div>  
    )
}

export default Login
