import "./home.css"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="home-bg">
                <div className="home-main">
                    <div className="home-welcome">
                        <div className="home-content">
                            <h1>Welcome to TriHel</h1>
                            <p>The most comfortable and affordable hotel in flatiron. <br/>
                            Get away from coding, let us take care your vacation</p>
                            </div>
                        <Button 
                            component={Link} to="/about" 
                            variant="outlined" 
                            size="large" 
                            sx={{borderColor:"gray", color:"black"}}>
                                View Rooms
                        </Button>
                    </div>
                </div>
            </div>
            <h1>Features</h1>
            
        </div>
    )
}

export default Home
