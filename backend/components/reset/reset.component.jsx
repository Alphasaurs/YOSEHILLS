import React from "react";
import CustomButton from "../custom-button/custom-button.compnent";
import { Link } from "react-router-dom";
import "../form-input/form-input.styles.scss";
import "./reset.styles.scss";
import "../form-structure/form-structure.styles.scss";

class Reset extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form">
        <div className="content">
          <h2>Login</h2> <br></br>
          <p>Enter your new password below</p>
          <form onSubmit={this.handleSubmit}>
            <label for="password">New password</label>
            <br></br>
            <input
              type="password"
              name="email"
              placeholder="Enter your password"
              required
            />
            <br></br>
            <label for="password">New password</label> <br></br>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <br></br>
            <CustomButton type="submit">Reset</CustomButton>
          </form>
          <span>
            New to SnowFlake?
            <Link className="blue" to="/sign-up">
              <span class="blue">Create an account</span>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Reset;
