import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import HomePage from "../Homepage/HomePage";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(
          "https://gob-portal.herokuapp.com/api/private",
          config
        );
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorised login");
      }
    };

    fetchPrivateDate();
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return error ? (
    <span className="error-message">
      <h1>Welcome, Dear User</h1>
      <h2>{error}</h2>
      <h3>Please refresh the page</h3>
    </span>
  ) : (
    <div>
      <HomePage />
      {/* <div>Hii you can access private page</div> */}
    </div>
  );
};

export default PrivateScreen;
