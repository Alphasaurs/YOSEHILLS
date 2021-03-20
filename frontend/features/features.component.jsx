import React from "react";
import "./features.styles.scss";
import "../../assets/location.svg";

const Features = ({}) => (
  <div className="main">
    <h1 className="why">Why Us</h1>
    <div className="feature-items">
      <div className="feature-item">
        <div className="content">
          <h2 className="title">
            Get More <br /> Visibility
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            incidunt.
          </p>
        </div>
      </div>

      <div className="feature-item">
        <div className="content">
          <h2 className="title">
            Organize Your <br />
            Candidates
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            incidunt.
          </p>
        </div>
      </div>

      <div className="feature-item">
        <div className="content">
          <h2 className="title">
            Verify Their
            <br />
            Abilities
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            incidunt.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
