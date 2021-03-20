import React from "react";
import CustomButton from "../custom-button/custom-button.compnent";
import { Link } from "react-router-dom";
import "../form-input/form-input.styles.scss";
import "./forgot.styles.scss";
import "../form-structure/form-structure.styles.scss";

class Forgot extends React.Component {
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
          <h2>Forgot your password?</h2>
          <p>
            Enter the email associated with your account and we'll send you
            instructions to reset your password.
          </p>
          <form onSubmit={this.handleSubmit}>
            <label for="email">email address</label>
            <br></br>
            <input type="email" name="email" placeholder="Enter your email" />

            <br></br>

            <Link to="/reset-your-password">
              <CustomButton type="submit">Submit</CustomButton>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Forgot;
