import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "./Card";
import Sdata from "./Sdata";
import axios from "axios";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import CloseIcon from "@material-ui/icons/Close";

import "./JobPage.css";

const JobPage = () => {
  const [posts, setPosts] = useState([{}]);

  const remove_load = (index) => {
    const previousItem = Array.from(posts);
    previousItem.splice(index, 1);
    setPosts(previousItem);
  };

  useEffect(() => {
    axios
      .get("https://gob-portal.herokuapp.com/api/auth/showjobs")
      .then((res) => {
        const harshal = res.data.ques;
        setPosts(harshal);
        console.log(res.data.ques);

        // setSub(res.data.pastSurveys.questions)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(posts);
  {
  }
  return (
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
          {posts.map((val, index) => {
            return (
              <div className="card" id="card1" key={index}>
                {/* Cancel Button */}

                <div className="card__cancel">
                  <button onClick={() => remove_load(index)}>
                    <CloseIcon />
                  </button>
                </div>

                {/* Company Name and Bookmark */}

                <div className="card__title">
                  <h3>{val.companyName}</h3>
                  <p>
                    <BookmarkBorderIcon />
                  </p>
                </div>

                {/* Job Designation, Location and Apply Button */}

                <div className="card__info">
                  <h5>{val.designation}</h5>
                  <h6> {val.location} </h6>
                  <a href={val.applyLink} target="_blank">
                    <button>Apply Now</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobPage;
