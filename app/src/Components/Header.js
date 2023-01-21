import React from "react";
import CardFront from "../Assets/images/bg-card-front.png";
import CardBack from "../Assets/images/bg-card-back.png";

export default function Header(props) {
  const { values } = props;

  // numberInput.value = numberInput.value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();

  return (
    <header className="header-container">
      <div className="main-image"></div>
      <div className="card-img-container">
        <span className="on-card-name">
          {values.cardName || "Jane Appleseed"}
        </span>
        <span className="on-card-number">
          {values.cardNumber
            .replace(/\s/g, "")
            .replace(/([0-9]{4})/g, "$1 ")
            .trim() || "0000 0000 0000 0000"}
        </span>
        <span className="on-card-exp">
          {values.expDateM || "00"}/{values.expDateY || "00"}
        </span>
        <span className="on-card-cvc">{values.cvc || "000"}</span>
        <svg className="card-logo"></svg>
        <img className="card-front" src={CardFront} alt="front card" />
        <img className="card-back" src={CardBack} alt="back card" />
      </div>
    </header>
  );
}
