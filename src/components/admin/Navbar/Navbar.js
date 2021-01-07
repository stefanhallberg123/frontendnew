import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
export default function Navbar() {
  // const goToPhp = () => {
  //   window.location.href =
  //     "http://localhost/P.ALbilhandel-backendPHP/php/index.php";
  // };

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
        <a
          className="navbar__link"
          href="http://localhost/P.ALbilhandel-backendPHP/php/index.php"
        >
          Bilar
        </a>
        <a
          className="navbar__link"
          href="http://localhost/P.ALbilhandel-backendPHP/php/Views/login.php"
        >
          Logga Ut
        </a>
      </nav>
    </div>
  );
}
