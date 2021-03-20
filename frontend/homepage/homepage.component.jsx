import React from "react";
import Companies from "../companies/companies.component";
import Features from "../features/features.component";
import Header from "../header/header.component";
import Jobs from "../jobs/jobs.component";
import Welcome from "../welcome/welcome.component";

import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage">
    <div className="grid-container">
      <Welcome />
      <Features />
      <Companies />
    </div>
  </div>
);

export default Homepage;
