import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/Routing/PrivateRoute";
import PrivateScreen from "./components/screens/PrivateScreen";

// Form Components
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPass from "./components/ForgetPassword/ForgotPass";
import Checkout from "./components/Forms/Checkout";

// Create Job Components
import CreateJob from "./components/CreateJob/CreateJob/CreateJob";
import Jobinfo from "./components/CreateJob/JobInfo/Jobinfo";

// Profile Components
import Profile from "./components/Profile/Profile";

// Homepage Components
import HomePage from "./components/LandingPage/Home/Home";
import MobileMenu from "./components/LandingPage/MobileMenu/MobileMenu";

// Navbar Components
import Intership from "./components/Navbar/Internship/Internship";
import Job from "./components/Navbar/Jobs/Job";
import Hackthon from "./components/Navbar/Hackthon/Hackthon";
import Notification from "./components/Navbar/Notification/Notification";
import Bookmark from "./components/Navbar/Bookmark/Bookmark";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotpassword" component={ForgotPass} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/createjob" component={CreateJob} />
          <Route exact path="/jobinfo" component={Jobinfo} />
          <Route exact path="/internship" component={Intership} />
          <Route exact path="/job" component={Job} />
          <Route exact path="/hackthon" component={Hackthon} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/bookmark" component={Bookmark} />
          <Route exact path="/mobmenu" component={MobileMenu} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
