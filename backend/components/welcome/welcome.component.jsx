import React from "react";
import "./welcome.styles.scss";
import Alphasaurs from "../../assets/alphasaurs.svg";
import CustomButton from "../custom-button/custom-button.compnent";
const Welcome = () => (
  <div className="combine">
    <div className="welcome">
      <div className="line">
        <h1>
          Welcome to <br />
          <a className="brand">SnowFlake</a>
        </h1>
        <CustomButton>
          <a href="https://www.alphasaurs.com/">Get Started</a>
        </CustomButton>
      </div>

      <div className="card">
        <img src={Alphasaurs} />
      </div>
    </div>
  </div>
);

export default Welcome;
