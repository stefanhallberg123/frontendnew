import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <NavLink
          to="/admin/messages"
          className="navbar__link"
          activeClassName="active"
        >
          Meddelanden
        </NavLink>
        <NavLink
          to="/admin/cars"
          className="navbar__link"
          activeClassName="active"
        >
          Bilar
        </NavLink>
        <NavLink className="navbar__link" to="/admin/logout">
          Logga ut
        </NavLink>
      </nav>
    </div>
  );
}
