import React from "react";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import Card from "./Card";
import Sdata from "./Sdata";
import "./JobPage.css";

const JobPage = () => (
  <div className="jobpage">
    {/* Jobpage title */}

    <div className="jobpage__title">
      <p>Current Job Openings</p>
      <Button variant="outlined" color="primary">
        <a href="./createjob">Create a Job</a>
      </Button>
    </div>

    {/* Jobpage Body */}

    <div className="jobpage__body">
      {/* Jobpage list */}

      <div className="jobpage__list">
        {Sdata.map((val, index) => {
          return (
            <Card
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
        })}
      </div>
    </div>
  </div>
);

export default JobPage;
