import { Route } from "react-router-dom";
import "./App.scss";
import Features from "./components/features/features.component";
import Forgot from "./components/forgot/forgot.component";
import Header from "./components/header/header.component";
import Homepage from "./components/homepage/homepage.component";
import Jobs from "./components/jobs/jobs.component";
import Recruiter from "./components/recruiter/recruiter.component";
import Reset from "./components/reset/reset.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sign-up/sign-up.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/jobs" component={Features} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/recruiter" component={Recruiter} />
      <Route exact path="/forgot-your-password" component={Forgot} />
      <Route exact path="/reset-your-password" component={Reset} />
    </div>
  );
}

export default App;
