import React from "react";
import MainDesktop from "../Assets/images/bg-main-desktop.png";
import CardFront from "../Assets/images/bg-card-front.png";
import CardBack from "../Assets/images/bg-card-back.png";

export default function Header(props) {
  const { values } = props;

  return (
    <header className="header-container">
      <div className="main-image"></div>
      <div className="card-img-container">
        <span className="on-card-name">
          {values.cardName || "Jane Appleseed"}
        </span>
        <span className="on-card-number">
          {values.cardNumber || "0000 0000 0000 0000"}
        </span>
        <span className="on-card-exp">
          {values.expDateM || "00"}/{values.expDateY || "00"}
        </span>
        <span className="on-card-cvc">{values.cvc || "000"}</span>
        <svg
          className="card-logo"
          width="84"
          height="47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
          <path
            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
            stroke="#fff"
          />
        </svg>
        <img className="card-front" src={CardFront} alt="front card" />
        <img className="card-back" src={CardBack} alt="back card" />
      </div>
    </header>
  );
}
