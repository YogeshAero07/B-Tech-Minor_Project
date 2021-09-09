import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// Homepage Components
import Header from "../Homepage/Header";
import Footer from "../Homepage/Footer";

import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./Checkout.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Checkout = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setACity] = useState("");
  const [zip, setZip] = useState("");

  const [education, setEducation] = useState("");
  const [institute, setInstitute] = useState("");
  const [branch, setBranch] = useState("");
  const [cvv, setCvv] = useState("");

  const [error, setError] = useState("");

  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isBack, setIsBack] = useState(false);

  const [registerId, setRegisterId] = useState(localStorage.getItem("authId"));
  console.log(registerId);

  function nextHandle() {
    setIsFirstOpen(!isFirstOpen);
  }
  function handlePreview() {
    setIsSecondOpen(!isSecondOpen);
  }
  function handleBack() {
    setIsBack(!isBack);
  }

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://gob-portal.herokuapp.com/api/auth/profile",
        {
          firstName,
          lastName,
          mobileNumber,
          date,
          address,
          country,
          state,
          city,
          zip,
          education,
          institute,
          branch,
          cvv,
          registerId,
        }
      );
      history.push("/login");
    } catch (error) {
      console.log("error");
    }
  };

  const classes = useStyles();
  return (
    <div className="checkout">
      {/* Checkout Header */}

      <div className="checkout__header">
        <Header />
      </div>

      {/* Checkout Body */}

      <div className="checkout__body">
        <form
          onSubmit={registerHandler}
          className="checkout__inputs"
          noValidate
        >
          {!isFirstOpen ? (
            <div className="checkout__personal">
              <h3>Personal Details</h3>
              <div className="personal__inputs">
                <div className="personal__one">
                  <div>
                    <p>First Name</p>
                    <input
                      required
                      id="firstName"
                      placeholder="First name"
                      value={firstName}
                      autoFocus
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>Last Name</p>
                    <input
                      required
                      id="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="personal__two">
                  <div>
                    <p>Mobile Number</p>
                    <input
                      required
                      id="mobileNumber"
                      placeholder="Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>Date of Birth</p>
                    <input
                      id="date"
                      placeholder="DD/MM/YYYY"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="personal__three">
                  <div>
                    <p>Country</p>
                    <input
                      required
                      id="country"
                      placeholder="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>State/Province/Region</p>
                    <input
                      required
                      id="state"
                      value={state}
                      placeholder="State/Province/Region"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>
                <div className="personal__four">
                  <div>
                    <p>City</p>
                    <input
                      required
                      id="city"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setACity(e.target.value)}
                    />
                  </div>
                  <div>
                    <p>Zip/Postal code</p>
                    <input
                      required
                      id="zip"
                      placeholder="Zip/Postal code"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </div>
                <div className="next__button">
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={nextHandle}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {!isSecondOpen ? (
                <div className="checkout__edu">
                  <h3>Educational Details</h3>
                  <div className="edu__inputs">
                    <div>
                      <p>Highest Education</p>
                      <input
                        required
                        id="education"
                        placeholder="Highest Education"
                        value={education}
                        autoFocus
                        onChange={(e) => setEducation(e.target.value)}
                      />
                    </div>
                    <div>
                      <p>Institute</p>
                      <input
                        required
                        id="institute"
                        placeholder="Institute"
                        value={institute}
                        onChange={(e) => setInstitute(e.target.value)}
                      />
                    </div>
                    <div>
                      <p>Specialization</p>
                      <input
                        required
                        id="branch"
                        placeholder="Specialization"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                      />
                    </div>
                    <div>
                      <p>Year of Completion</p>
                      <input
                        required
                        id="cvv"
                        placeholder="Year of Completion"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </div>
                    <div className="edu__button">
                      <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={handlePreview}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                // Preview Page

                <div className="checkout__preview">
                  <h3>Review Your Information</h3>
                  <div className="preview__inputs">
                    <div className="preview__key">
                      <p>First Name:</p>
                      <p>Last Name:</p>
                      <p>Mobile Number:</p>
                      <p>Date:</p>
                      <p>Country:</p>
                      <p>State:</p>
                      <p>City:</p>
                      <p>Zip:</p>
                      <p>Highest Education:</p>
                      <p>Institute:</p>
                      <p>Branch:</p>
                      <p>Year of Completion:</p>
                    </div>
                    <div className="preview__value">
                      <p>{firstName}</p>
                      <p>{lastName}</p>
                      <p>{mobileNumber}</p>
                      <p>{date}</p>
                      <p>{country}</p>
                      <p>{state}</p>
                      <p>{city}</p>
                      <p>{zip}</p>
                      <p>{education}</p>
                      <p>{institute}</p>
                      <p>{branch}</p>
                      <p>{cvv}</p>
                    </div>
                  </div>

                  <div className="preview__button">
                    <Button type="submit" variant="outlined" color="primary">
                      Submit
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </form>
      </div>

      {/* Checkout Page Footer */}

      <div className="checkout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
