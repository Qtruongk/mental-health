import React from "react";
import "./Services.css";
import Quiz from "../components/Quiz";
const Services = () => {
  return (
    <div className="services">
      <div className="title-health-quiz">Mental Health Quiz</div>
      <p className="online-screening-is">Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.</p>
      <p className="online-screening-is">Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</p>
      <Quiz/>
    </div>
  );
};

export default Services;
