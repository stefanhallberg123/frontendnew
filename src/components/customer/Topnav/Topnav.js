import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./topNav.scss";

export default function Topnav() {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [toggle]);

  const showNav = () => {
    setToggle((c) => !c);
  };
  return (
    <div>
      <nav className="navbarCustomer">
        <div className="burgerIcon">
          <FontAwesomeIcon
            onClick={showNav}
            className={toggle ? "turn" : "burger"}
            icon={faBars}
          />
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
        <div className={toggle ? "navarea" : "notNavArea"}>
          <h1 className="navHead">P.AlBilhandel</h1>
          <Link to="/">Start</Link>
          <Link to="/allCars">Alla våra bilar</Link>
          <Link to="/about">Om oss</Link>
          <Link to="/formedlaBil">Förmedla din bil</Link>
          <h3>Kontakta oss på någon av länkarna nedan</h3>
          <div className="SoMo">
            <a href="https://www.instagram.com/p.albilhandel/">
              <FontAwesomeIcon className="instagram" icon={faInstagramSquare} />
            </a>
            <a href="https://www.facebook.com/palbilhandel">
              <FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
            </a>

            <a href="mailto:info@palbilhandel.se">
              <FontAwesomeIcon className="emailLogoFooter" icon={faEnvelope} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
