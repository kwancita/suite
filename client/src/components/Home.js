// import "./home.css"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Home() {
    return (
      <div>
        <div className="home-bg">
          <div className="home-main">
            <div className="home-welcome">
              <div className="home-content">
                <h1>Welcome to Suite Finder</h1><br/>
                <p>
                  The easiest and most effective solution to your lodging
                  needs <br /><br/>
                  <b>Get away from coding, let us take care of your vacation</b>
                </p>
              </div>
              <Button
                component={Link}
                to="/rooms"
                variant="outlined"
                size="large"
                sx={{ borderColor: "gray", color: "black" }}
              >
                View Rooms
              </Button>
            </div>
          </div>
        </div>
        {/* <h1>Features</h1> */}
      </div>
    );
}

export default Home
