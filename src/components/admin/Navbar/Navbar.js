import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <NavLink
          to="/admin/cars"
          activeClassName="navbar__link--active"
          className="nav-link"
        >
          Bilar
        </NavLink>
        <NavLink
          to="/admin/messages"
          activeClassName="navbar__link--active"
          className="nav-link"
        >
          Meddelanden
        </NavLink>
      </nav>
    </div>
  );
}
