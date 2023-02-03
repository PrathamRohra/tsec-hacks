import { Link } from "react-router-dom"
import "./navbar.css"
import Logo from './logo.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"><img src={Logo} alt="" srcset="" style={{
          height: '35px'}} /></span>
        <div className="navItems">
          <Link to="/register"><button className="navButton">Register</button></Link>
          <Link to="/login"><button className="navButton">Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar