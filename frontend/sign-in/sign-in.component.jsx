import React from "react";
import CustomButton from "../custom-button/custom-button.compnent";
import { Link } from "react-router-dom";
import "../form-input/form-input.styles.scss";
import "../form-structure/form-structure.styles.scss";

class SignIn extends React.Component {
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
          <h2>Login</h2> <br></br>
          <form onSubmit={this.handleSubmit}>
            <label for="email">Email address</label>
            <br></br>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <br></br>
            <label for="password">Password</label> <br></br>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <div clas="password">
              <Link className="blue" to="/forgot-your-password">
                Forgot your password?
              </Link>
            </div>
            <br></br>
            <div className="center">
              <CustomButton type="submit">Login</CustomButton>
            </div>
          </form>
          <div className="center">
            <span>
              New to SnowFlake?
              <Link className="blue" to="/sign-up">
                <span class="blue">Create an account</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
