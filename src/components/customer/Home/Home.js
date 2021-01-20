import React from "react";
import SendMsg from "../SendMsg/SendMsg";
import TopNav from "../Topnav/Topnav";
import Background from "../images/startBackgroundCar.jpg";
import secondImage from "../images/seeAllCars.jpg";
import { Link } from "react-router-dom";
import "./home.scss";
import Footer from "../Footer/Footer";
export default function Home() {
  return (
    <div>
      <TopNav></TopNav>
      <SendMsg></SendMsg>
      <div className="firstBlock">
        <img className="startImage" src={`${Background}`} alt="startCar" />
        <div className="ownRow">
          <div className="circle">
            <div className="circleText">Köper</div>
            <div className="circleText">Säljer</div>
            <div className="circleText">Förmedlar</div>
          </div>
        </div>
      </div>
      <div className="secondBlock">
        <img className="secondImage" src={`${secondImage}`} alt="startCar" />
        <Link to="/cars" className="imgTXT">
          Se alla våra bilar
        </Link>
        <Footer></Footer>
      </div>
    </div>
  );
}
