import { NavLink } from "react-router"
import Home from "../pages/Home"
import Properties from "../pages/Properties"
import Login from "../pages/Login"
import Register from "../pages/Register"

function Navbar() {
  return (
    <nav>
      <div>
        <span>Real Estate</span>
      </div>
      <div>
        <NavLink to="/" element={<Home/> } >Home</NavLink>
        <NavLink to="/properties" element={<Properties/> } >Properties</NavLink>
        <NavLink to="/login" element={<Login />} >Loing</NavLink>
        <NavLink to="/register" element={<Register/>}>Get Started</NavLink>
      </div>
    </nav>
  )
}

export default Navbar