import React from "react";
import Slide from "react-reveal/Slide";
import cmuLogo from "../static/images/CMU.jpg";
import CMU_Red from "../static/images/CMU_Red.jpg";
import EducationCard from "./cards/EducationCard";
import "../static/css/Education.css";

export default function Education() {
  return (
    <div className="section education">
      <h2 className="section-heading">Education</h2>
      <div className="education-card-container">
        <Slide left>
          <EducationCard
            schoolInfo={{
              name: "Universum College",
              logo: cmuLogo,
              degree: "Bachelor's Degree",
              dates: "October 2018 -  Expected Graduation",
            }}
          />
        </Slide>
        <Slide right>
          <EducationCard
            schoolInfo={{
              name: "Masaryk University",
              logo: CMU_Red,
              degree:
                "Studied in Masaryk University for one semester(6 months)",
              dates: "September 2020 - February 2021",
            }}
          />
        </Slide>
      </div>
    </div>
  );
}
