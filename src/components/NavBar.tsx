
import { NavLink } from "react-router";
import nasaLogo from "../assets/nasa-logo.svg"

const NavBar = () => {
    return (
        <div className="nav-container">
            <figure className="nav-logo">
                <img src={nasaLogo} alt="nasa logo" />
            </figure>
            <div className="nav-list-container">
                <ul className="nav-list">
                    <NavLink 
                        to="/pic-of-day" className={({ isActive }) => isActive ? "active" : ""}>
                            Pic of the Day
                    </NavLink>
                    <NavLink 
                        to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                            About
                    </NavLink>
                    <NavLink 
                        to="/Contact" className={({ isActive }) => isActive ? "active" : ""}>
                            Contact
                    </NavLink>

                </ul>
            </div>
        </div>
    )
}

export default NavBar