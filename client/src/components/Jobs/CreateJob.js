import React, { useState } from "react";
import "./CreateJob.css";
import axios from "axios";
import Button from "@material-ui/core/Button";

// Homepage Components
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header";

const CreateJob = ({ history }) => {
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setLocation] = useState("");
  const [applyLink, setApplyLink] = useState("");

  const addJobs = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://gob-portal.herokuapp.com/api/auth/addjobs",
        {
          companyName,
          designation,
          location,
          applyLink,
        }
      );

      history.push("/");
      // localStorage.setItem("authToken", data.token);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="create__job">
      {/* Create Job Navigation Menu */}

      <div className="create__header">
        <Header />
      </div>

      {/* Create Job Main Body */}

      <div className="create__body">
        {/* Create Page Headings */}

        <div className="create__headings">
          <h1>Find a great hire, fast</h1>
          <h4>Rated #1 in delivering quality hires</h4>
        </div>

        {/* Create Job Input Box */}

        <div className="create__inputs">
          <form
            id="mainPart"
            className="input__box"
            onSubmit={addJobs}
            noValidate
          >
            <input
              autoFocus
              required
              name="Company"
              placeholder="Company"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              required
              name="JobTitle"
              placeholder="Job Title"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <input
              required
              name="JobLocation"
              placeholder="Job Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            {/* <select>
              <option value="">Employment Type</option>
              <option>None</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Temporary</option>
              <option>Volunteer</option>
              <option>Internship</option>
            </select> */}
            <input
              require
              name="applyLink"
              placeholder="Apply Link"
              value={applyLink}
              onChange={(e) => setApplyLink(e.target.value)}
            />
            <Button
              type="submit"
              className="create__button"
              variant="contained"
            >
              Create Job
            </Button>
          </form>
        </div>
      </div>

      {/* Create Job Footer */}

      <div className="create__footer">
        <Footer />
      </div>
    </div>
  );
};

export default CreateJob;
