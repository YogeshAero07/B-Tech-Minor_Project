import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// File Imports
import "./Profile.css";
import Header from "../Homepage/Header";
import Footer from "../Homepage/Footer";

// Icons Imports
import CallIcon from "@material-ui/icons/Call";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import EmailIcon from "@material-ui/icons/Email";
import SchoolIcon from "@material-ui/icons/School";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

// Navigate Tab Imports
import { Tabs, Tab } from "@material-ui/core";

// Image Upload
import ImageUploading from "react-images-uploading";

// Main function

const Profile = (props) => {
  const history = useHistory();
  const { id } = useParams();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [posts, setPosts] = useState([]);
  // const [sub, setSub] = useState([])

  useEffect(() => {
    axios
      .get(`https://gob-portal.herokuapp.com/api/auth/showprofile/${id}`)
      .then((res) => {
        setPosts(res.data.ques);
        console.log(res.data.ques);
        // setSub(res.data.pastSurveys.questions)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChanged = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const filesSelecteHandler = (event) => {
    console.log(event.target.files[0]);
  };

  // Image Upload Function

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="profile">
      {/* Profile Navigation Menu */}

      <div className="profile__header">
        <Header />
      </div>

      {/* Profile Image, Headings, and Update */}

      <div className="profile__body">
        <div className="profile__dash">
          {/* Profile Image and Headings */}

          <div className="dash__left">
            {/* Image Upload  */}

            <div className="profile__img">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <div className="upload__image-wrapper">
                    <button
                      className="img__drop"
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>

                    {/* Image upload map function */}

                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        {/* Upload Image */}

                        <div className="img__upload">
                          <img src={image.data_url} alt="" width="100" />
                        </div>

                        {/* Upload and Remove Buttons */}

                        <div className="image-item__btn-wrapper">
                          <button onClick={() => onImageUpdate(index)}>
                            Update
                          </button>
                          <button onClick={() => onImageRemove(index)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>

            {/* Profile Headings */}

            <div className="profile__headings">
              <h3>Yogesh Bhamare</h3>
              <h6> Front-end Developer</h6>
            </div>
          </div>

          {/* Profile Update */}

          <div className="dash__right">
            <Button variant="outlined" color="black">
              Update your profile
            </Button>
          </div>
        </div>

        {/* Profile Tabs */}

        <div className="profile__tabs">
          <Tabs value={selectedTab} onChange={handleChanged}>
            <Tab label="Profile" />
            <Tab label="Education" />
            <Tab label="Account Setting" />
          </Tabs>
        </div>
        <div className="profile__info">
          {selectedTab === 0 && <ProfileInfo personalInfo={posts} />}
          {selectedTab === 1 && <EducationalInfo educationalInfo={posts} />}
          {selectedTab === 2 && <AccountSetting />}
        </div>
      </div>

      {/* Profile Footer */}

      <div className="profile__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Profile;

// Profile Information Function

const ProfileInfo = ({ personalInfo }) => {
  return (
    <div className="personal__info">
      <div className="personal__title">
        <h4>Personal Information </h4>
        <p>
          <Button variant="outlined" color="black">
            Edit
          </Button>
        </p>
      </div>

      <hr className="horizantal__line" />

      <div className="personal__list">
        <li>
          <span>
            <CallIcon />
            <p>Mobile No</p>
          </span>
          <label>{personalInfo.mobileNumber}</label>
        </li>
        <li>
          <span>
            <EmailIcon />
            <p>Email</p>
          </span>
          <label>ypbhamare07@gmail.com</label>
        </li>
        <li>
          <span>
            <EventIcon />
            <p>Date of Birth</p>
          </span>
          <label>{personalInfo.date}</label>
        </li>
        <li>
          <span>
            <LocationOnIcon />
            <p>Address</p>
          </span>
          <label>
            {personalInfo.city},{personalInfo.state},{personalInfo.country},
            {personalInfo.cvv}.
          </label>
        </li>
        {/* {personalInfo.address} */}
      </div>
    </div>
  );
};

// Educational Information Function

const EducationalInfo = ({ educationalInfo }) => {
  return (
    <div className="edu__info">
      <div className="edu__title">
        <h4>Educational Information</h4>
        <p>
          <EditIcon />
        </p>
      </div>

      <hr />

      <div className="edu__list">
        <li>
          <span>
            <SchoolIcon />
            <p>Highest Education</p>
          </span>
          <label>{educationalInfo.education}</label>
        </li>
        <li>
          <span>
            <LocationOnIcon />
            <p>Institute</p>
          </span>
          <label>{educationalInfo.institute}</label>
        </li>
        <li>
          <span>
            <SchoolIcon />
            <p>Branch</p>
          </span>
          <label>Mechanical Engineering</label>
        </li>
        <li>
          <span>
            <EventIcon />
            <p>Year of Completion</p>
          </span>
          <label>2022</label>
        </li>
      </div>
    </div>
  );
};

// Account Setting Function

const AccountSetting = () => {
  return (
    <div className="account__info">
      <h4>ACCOUNT SETTINGS</h4>
      <hr className="profile__thirdHeading" />
      <p>Change you account setting here!</p>
    </div>
  );
};
