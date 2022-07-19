import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Fade from "react-reveal/Fade";
import profilePic from "../static/images/AboutPic.JPG";
import Socials from "./Socials";
import { makeStyles } from "@material-ui/core/styles";
import "../static/css/About.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className="section about">
      <div className="about-container">
        <div className="about-left">
          {/* https://www.react-reveal.com/docs/ */}
          <Fade left>
            <h2 className="about-greeting">
              Hi! I'm Muhamet{" "}
              <img
                className="wave-emoji"
                alt="Wave Emoji"
                src="https://twemoji.maxcdn.com/2/72x72/1f44b-1f3fc.png"
              />
            </h2>
            <p className="about-text" align="left">
              I'm a frontend skillful and motivated developer. Since I'm focused
              in frontend I have knowledge in some of the languages that you can
              work as frontend developer. I am accountable for my work and I
              want to have more experience in this field.
              <br />
              <br />
              "It is obvious that we can no more explain a passion to a person
              who has never experienced it than we can explain light to the
              blind."
              <br />
              <br />
              That's why I don't want no one to explain me about programming no
              more, I want to experience it myself.
            </p>
            <Socials noLeft />
          </Fade>
        </div>
        <div className="about-right">
          <Fade right>
            <Avatar
              className={classes.large + " about-avatar"}
              src={profilePic}
              alt="Muhamet"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
