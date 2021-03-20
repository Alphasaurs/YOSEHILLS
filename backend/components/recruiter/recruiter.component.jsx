import React from "react";
import CustomButton from "../custom-button/custom-button.compnent";
import { Link } from "react-router-dom";
import "../form-input/form-input.styles.scss";
import "../form-structure/form-structure.styles.scss";
import Candidates from "../../assets/candidates.svg";
import RecruiterLogo from "../../assets/recruitment.svg";
import "./recruiter.styles.scss";

class Recruiter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form">
        <div className="content">
          <h2>Signup</h2> <br></br>
          <h3>I'm a</h3>
          <div className="items">
            <div className="item">
              <Link to="/sign-up">
                <CustomButton type="submit">
                  <img
                    class="candidates"
                    src={Candidates}
                    alt="Alphasaurs"
                  ></img>
                  Candidate
                </CustomButton>
              </Link>
            </div>

            <div className="itemblue">
              <CustomButton type="submit">
                <img
                  class="recruiter"
                  src={RecruiterLogo}
                  alt="Alphasaurs"
                ></img>
                Recruiter
              </CustomButton>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label for="name">Full Name</label>
            <br></br>
            <input
              type="name"
              name="name"
              placeholder="Enter your full name"
              required
            />
            <br></br>
            <label for="email">Email</label>
            <br></br>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <br></br>
            <div className="password">
              <div className="item1">
                <label for="password">Create Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="item2">
                <label for="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  name="confirm-password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <label for="skills">Company</label>
            <br></br>
            <input
              type="name"
              name="name"
              placeholder="Enter your company"
              required
            />
            <br></br>
            <div className="center">
              <CustomButton type="submit">Login</CustomButton>
            </div>
          </form>
          <span className="center">
            Have an account?
            <Link className="blue" to="/sign-in">
              <span class="blue">Login</span>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Recruiter;
