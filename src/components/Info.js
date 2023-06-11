import React from "react";
import headshotImage from "../images/business-card-headshot.png";

function Info() {
  return (
    <div className="info--container">
      <img className="info--headshot" src={headshotImage} alt="Zach Mutch Headshot" />
      <h1 className="info--fullName">Zach Mutch</h1>
      <h3 className="info--jobTitle">Full-stack Developer</h3>
      <button
        className="info--portfolio"
        onClick={() => window.open("https://thatdevguy.app/", "_blank")}
      >
        thatdevguy.app
      </button>
      <div className="info--buttonContainer">
        <button className="info--emailButton">
          <i class="fa-solid fa-envelope fa-lg"></i>Email
        </button>
        <button className="info--resume">
          <i class="fa-solid fa-download fa-lg"></i> Resume
        </button>
      </div>
    </div>
  );
}

export default Info;
