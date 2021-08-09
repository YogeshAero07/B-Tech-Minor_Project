import React from "react";
import "./CreateJob.css";
import Button from "@material-ui/core/Button";

// Homepage Components
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header";

const CreateJob = () => {
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
          <form id="mainPart" className="input__box" noValidate>
            <input required placeholder="Job Title" autoFocus />
            <input required placeholder="Company" autoComplete="company" />
            <input
              required
              placeholder="Job Location"
              autoComplete="job location"
            />
            <select>
              <option value="">Employment Type</option>
              <option>None</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Temporary</option>
              <option>Volunteer</option>
              <option>Internship</option>
            </select>
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
