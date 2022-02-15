import '../App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './Nav';
import Routing from './Routing';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  if (!authenticated){
    return <div></div>
  }

  return (
    <div className="App">
      <Router>
        <Nav setCurrentUser={setCurrentUser} />
        <Routing currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </Router>
    </div>
  );
}

export default App;
