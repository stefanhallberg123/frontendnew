import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.scss";

export default function Footer() {
  return (
    <div>
      <p>Vi erbjuder även gratis hemleverans inom Stockholms området. </p>
      <p>Vi reserverar oss för eventuella skriv och stavfel.</p>
      <p> Varmt Välkomna!</p>
      <div className="row">
        <img
          className="footerLogo"
          src={`${process.env.PUBLIC_URL}/logos/logoTransp.png`}
          alt="logo"
        ></img>
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
        <div className="dead"></div>
      </div>
    </div>
  );
}
