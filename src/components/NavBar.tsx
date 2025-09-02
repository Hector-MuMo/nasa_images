import type { JSX } from "react";
import { NavLink } from "react-router";
import nasaLogo from "../assets/nasa-logo.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { slide as Menu } from "react-burger-menu";

const NavBar = (): JSX.Element => {
  const { width } = useWindowDimensions();

  return (
    <nav>
      {width > 768 ? (
        <div className="nav-container">
          <figure className="nav-logo">
            <img src={nasaLogo} alt="nasa logo" />
          </figure>
          <div className="nav-list-container">
            <ul className="nav-list">
              <NavLink
                to="/pic-of-day"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Pic of the Day
              </NavLink>
              <NavLink
                to="/earth"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Earth Images
              </NavLink>
            </ul>
          </div>
        </div>
      ) : (
        <Menu>
          <NavLink
            to="/pic-of-day"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pic of the Day
          </NavLink>
          <NavLink
            to="/earth"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Earth Images
          </NavLink>
        </Menu>
      )}
    </nav>
  );
};

export default NavBar;
