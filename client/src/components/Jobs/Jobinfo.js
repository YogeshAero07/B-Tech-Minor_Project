import React from "react";
import "./Jobinfo.css";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";

const Jobinfo = () => {
  return (
    <div className="jobpage__sidebox">
      {/* Sidemenu Top */}

      <div className="sideMenu__top">
        <div className="top__one">
          <h2>Amazon</h2>
          <ShareIcon />
        </div>
        <div className="top__two">
          <h5>Software Engineer</h5>
          <p>Bangluru, India</p>
          <Button id="applyButton" variant="outlined">
            Apply
          </Button>
        </div>
      </div>
      <hr />

      {/* Sidemenu Middle */}

      <div className="sideMenu__middle">
        <div>
          <p>Job</p>
          <ul>
            <li>Full-time</li>
            <li>4 Vacancy</li>
          </ul>
        </div>
        <div>
          <p>Company</p>
          <ul>
            <li>IT Company</li>
            <li>1,000 Employee</li>
          </ul>
        </div>
      </div>
      <hr />

      {/* Sidemenu Bottom */}

      <div className="sideMenu__bottom">
        <div className="side">
          <h6>Description</h6>
          <p>
            <strong>As a team, we are committed to:</strong>
          </p>
          <ul>
            <li>
              Making sure our impact on students is positive and measurable.
            </li>
            <li>
              Investing in each other's growth, both professionally and
              personally.
            </li>
            <li>
              Pushing for transparency in our relationships with each other and
              our stakeholders.
            </li>
            <li>Ensuring privacy and security are always top of mind.</li>
          </ul>
          <p>
            <strong>As a team, we are committed to:</strong>
          </p>
          <ul>
            <li>
              Making sure our impact on students is positive and measurable.
            </li>
            <li>
              Investing in each other's growth, both professionally and
              personally.
            </li>
            <li>
              Pushing for transparency in our relationships with each other and
              our stakeholders.
            </li>
            <li>Ensuring privacy and security are always top of mind.</li>
          </ul>
          <p>
            <strong>As a team, we are committed to:</strong>
          </p>
          <ul>
            <li>
              Making sure our impact on students is positive and measurable.
            </li>
            <li>
              Investing in each other's growth, both professionally and
              personally.
            </li>
            <li>
              Pushing for transparency in our relationships with each other and
              our stakeholders.
            </li>
            <li>Ensuring privacy and security are always top of mind.</li>
          </ul>
          <p>
            <strong>As a team, we are committed to:</strong>
          </p>
          <ul>
            <li>
              Making sure our impact on students is positive and measurable.
            </li>
            <li>
              Investing in each other's growth, both professionally and
              personally.
            </li>
            <li>
              Pushing for transparency in our relationships with each other and
              our stakeholders.
            </li>
            <li>Ensuring privacy and security are always top of mind.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jobinfo;
