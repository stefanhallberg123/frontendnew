import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./topNav.scss";

export default function Topnav() {
  return (
    <div>
      <nav className="navbarCustomer">
        <div className="burgerIcon">
          <FontAwesomeIcon className="burger" icon={faBars} />
        </div>
        <div className="NavLogoFlex">
          <Link to="/">
            <img
              className="navLogo"
              src={`${process.env.PUBLIC_URL}/logos/logoTransp.png`}
              alt="logo"
            />
          </Link>
        </div>
        <div className="crap"></div>
      </nav>
    </div>

    // <div>
    //   {/* <FontAwesomeIcon className="burger" icon={faBars} />
    //   <div className="container">
    //     <img
    //       className="logoImg"
    //       src={`${process.env.PUBLIC_URL}/images/logoTransp.png`}
    //       alt="logo"
    //     />
    //   </div> */}
    // </div>
  );
}
