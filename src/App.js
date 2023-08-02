import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import { BrowserRouter as Router, Route, Link,NavLink,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        Rect JS FrontEnd
      </h3>

      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/home">Home</NavLink>
          </li>
        </ul>
        <ul className='navbar-nav'>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/department">Department</NavLink>
          </li>
        </ul>
        <ul className='navbar-nav'>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">Employee</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/department" element={<Department/>} />
        <Route exact path="/employee" element={<Employee/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
