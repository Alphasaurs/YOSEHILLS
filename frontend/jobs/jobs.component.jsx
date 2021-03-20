import React from "react";
import "./jobs.styles.scss";
import "../../assets/location.svg";

const Jobs = ({ title, description, location }) => (
  <div className="job-items">
    <div className="content">
      <h1 className="title">{title}</h1>
      <h3 className="description">{description}</h3>
      <p className="location">{location}</p>
    </div>
  </div>
);

export default Jobs;
