import { Link } from "react-router-dom"
import "./navbar.css"
import Logo from './logo.png'
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"

const Navbar = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"><img src={Logo} alt="" srcset="" style={{
          height: '35px'}} /></span>
        {!currentUser && <div className="navItems">
          <Link to="/signup"><button className="navButton">Signup</button></Link>
          <Link to="/login"><button className="navButton">Login</button></Link>
        </div>}
        {currentUser && 
          <div className="navItems">
          <Link to="/logout"><button className="navButton">Logout</button></Link>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar;