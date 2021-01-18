import React from "react";
import Topnav from "../Topnav/Topnav";
import Footer from "../Footer/Footer";
import "./about.scss";
export default function About() {
  return (
    <div className="aboutContainer">
      <Topnav></Topnav>
      <h1 className="aboutUs">Om oss</h1>
      <div>
        <ul className="aboutUl">
          <li className="aboutLi">
            Vi använder oss utav vårt breda kontaktnätverk. Oftast finns det
            redan en potentiell köpare
          </li>
          <li className="aboutLi">
            Vi marknadsför på sociala medier, utöver Blocket butik
          </li>
          <li className="aboutLi">
            Vi har en kombinerad erfarenhet på 11 år inom service och
            försäljning
          </li>
          <li className="aboutLi">
            Vi är stolta över att vara marknadens mest kostnadseffektiva
            bilförmedlare!
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
  );
}
