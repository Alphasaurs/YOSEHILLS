import React from "react";
import "./companies.styles.scss";
import logo from "../../assets/logo.svg";
import A from "../../assets/A violet.svg";

const Companies = () => (
  <div className="companies">
    <h1>Companies Who Trust Us </h1>
    <div className="company">
      <img src={logo} alt="Alphasaurs"></img>
      <img src={A} alt="Alphasaurs"></img>
      <img src={logo} alt="Alphasaurs"></img>
      <img src={A} alt="Alphasaurs"></img>
      <img src={logo} alt="Alphasaurs"></img>
      <img src={A} alt="Alphasaurs"></img>
      <img src={logo} alt="Alphasaurs"></img>
      <img src={A} alt="Alphasaurs"></img>
    </div>
  </div>
);

export default Companies;
