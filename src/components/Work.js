import React from "react";
import Fade from "react-reveal/Fade";
import WorkCard from "./cards/WorkCard";
import KosovaLogo from "../static/images/Kosova.jpg";
import "../static/css/Work.css";

export default function Work() {
  return (
    <div className="section work ">
      <div className="slide">
        <h2 className="section-heading">Work Experience</h2>
        <Fade bottom>
          <div className="experience-cards-div">
            <WorkCard
              cardInfo={{
                company: "KosovaOutsource LLC",
                logo: KosovaLogo,
                desc: "I was part of an internship in this company",
                date: "ReactJS",
                role: "FrontEnd Developer",
              }}
            />
            <WorkCard
              cardInfo={{
                company: "KosovaOutsource LLC",
                logo: KosovaLogo,
                desc: "I was part of an internship in this company",
                date: "ReactJS",
                role: "FrontEnd Developer",
              }}
            />
            <WorkCard
              cardInfo={{
                company: "KosovaOutsource LLC",
                logo: KosovaLogo,
                desc: "I was part of an internship in this company",
                date: "ReactJS",
                role: "FrontEnd Developer",
              }}
            />
          </div>
        </Fade>
      </div>
      <div className="slide">
        <h2 className="section-heading">Work Experience</h2>
        <div className="experience-cards-div">
          <WorkCard
            cardInfo={{
              company: "KosovaOutsource LLC",
              logo: KosovaLogo,
              desc: "I was part of an internship in this company",
              date: "ReactJS",
              role: "FrontEnd Developer",
            }}
          />
          <WorkCard
            cardInfo={{
              company: "KosovaOutsource LLC",
              logo: KosovaLogo,
              desc: "I was part of an internship in this company",
              date: "ReactJS",
              role: "FrontEnd Developer",
            }}
          />
          <WorkCard
            cardInfo={{
              company: "KosovaOutsource LLC",
              logo: KosovaLogo,
              desc: "I was part of an internship in this company",
              date: "ReactJS",
              role: "FrontEnd Developer",
            }}
          />
        </div>
      </div>
    </div>
  );
}
