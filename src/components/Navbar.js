import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <NavLink to="/" end className={linkClass}>
        Home
      </NavLink>

      <NavLink to="/events" className={linkClass}>
        Events
      </NavLink>

      <NavLink to="/events/new" className="nav-button">
        Add Event +
      </NavLink>
    </nav>
  );
}