import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Form Components
import PrivateScreen from "./components/screens/PrivateScreen";
import Login from "./components/Forms/Login";
import Register from "./components/Forms/Register";
import ForgotPass from "./components/Forms/ForgotPass";
import Checkout from "./components/Forms/Checkout";
import Jobinfo from "./components/Jobs/Jobinfo";

// Homepage Components
import Profile from "./components/ProfilePage/Profile";
import HomePage from "./components/Homepage/HomePage";
import CreateJob from "./components/Jobs/CreateJob";
import MobileMenu from "./components/Homepage/MobileMenu";

// Navlist Components
import Intership from "./components/NavList/Internship";
import Job from "./components/NavList/Job";
import Hackthon from "./components/NavList/Hackthon";
import Notify from "./components/NavList/Notification";
import Book from "./components/NavList/Bookmark";

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
          <Route exact path="/notification" component={Notify} />
          <Route exact path="/bookmark" component={Book} />
          <Route exact path="/mobmenu" component={MobileMenu} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
