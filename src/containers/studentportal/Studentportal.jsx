import React from "react";
import "./studentportal.css";
import construction from "../../assets/images/under-construction-sign.svg"
const Studentportal = () => {
  return (
    <div className="studentportal" id = "students">
      <div className="studentportal-container">
              <h1 className="studentportal-title">Student Portal</h1>
              <div className="construct-svg">
                  <img src={construction}/>
              </div>
        <div className="portalMessage">Whoops! we Are under construction!</div>
      </div>
    </div>
  );
};

export default Studentportal;
