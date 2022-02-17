import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import "./login_signup.css"

function Login({currentUser, setCurrentUser, roomID}) {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    // const path = `/rooms/${roomID}`
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
                  const path = roomID ? `/rooms/${roomID}` : "/"
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
        <div className="ls-container">
          {currentUser?(
            <p>You are already logged in</p>
          ):(
            <form className="ls-form" onSubmit={handleSubmit}>
              <h2>Login here</h2>
                  <input 
                      className="ls-input"
                      id="usernname-login"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleChange}
                  />
                  <br />
                  <input 
                      className="ls-input"
                      id="password-login"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                  />
                  <br />
                  <span className="ls-error">{errors}</span>
                  <br />
                  <button className="ls-button" type="submit">Login</button>
                  <p>No account yet? <Link to="/signup" className="ls-link">Sign Up</Link></p>
            </form>
          )}
        </div>  
    )
}

export default Login
