import React from "react";
import Header from "./Header";
import JobPage from "../Jobs/JobPage";
import Footer from "./Footer";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage__body">
      <Header />
      <JobPage />
      <Footer />
    </div>
  );
}

export default HomePage;
