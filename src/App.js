import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import List from "./components/Songlist";
import Play from "./components/Play";
//import Item from "./components/songitem";

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
    <br/>
      <Route path="/dashboard/lib" exact component={List} />
      <Route path="/dashboard/lib/:id" component={Play} />"
    </div>
    </Router>
  );
}

export default App;
