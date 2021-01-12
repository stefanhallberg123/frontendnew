import React from "react";
import SendMsg from "../SendMsg/SendMsg";
import TopNav from "../Topnav/Topnav";
import "./home.scss";
export default function Home() {
  return (
    <div>
      <TopNav></TopNav>
      <SendMsg></SendMsg>
      <div>
        <img
          className="startImage"
          src={`${process.env.PUBLIC_URL}/images/startBackgroundCar.jpg`}
          alt="startCar"
        />
      </div>
    </div>
  );
}
