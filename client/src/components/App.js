import '../App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './Nav';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
