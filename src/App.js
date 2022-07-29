import './App.css'
import RegisterLogin from "./myComponents/Register-Login"
import "bootstrap/dist/css/bootstrap.min.css"
import Homepage from './myComponents/Homepage'
import Blogs from './myComponents/Blogs'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
      {/* <RegisterLogin />
      <Homepage /> */}
      <div className="route-div">
      <Router>
        <div className="Routes">
          <ul>
            <li>
              <Link to="/">Register Login</Link>
            </li>
            <li>
              <Link to="/Homepage">Homepage</Link>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path='/' element={< RegisterLogin />}></Route>
            <Route exact path='/homepage' element={< Homepage />}></Route>
            <Route exact path='/blogs' element={< Blogs />}></Route>
          </Routes>
        </div>
      </Router>
      </div>
    </>
  );
}

export default App;

