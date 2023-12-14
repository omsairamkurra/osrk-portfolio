import React from "react";
import "./skills.css";
import UIDesign from "../../assests/ui-design.png";
import WebDesign from "../../assests/website-design.png";
import AppDesign from "../../assests/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        I am a skilled and passionate full stack developer and web designer with
        experience in creating visually appearing and user-friendly websites. I
        have a strong understanding of design and a keen eye of detail. I am
        proficient in HTML,CSS and JavaScript, as well as design Software Figma
        and illustrator
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UI Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              UI (User Interface) and UX (User Experience) Design are crucial
              aspects of creating intuitive and engaging digital experiences.
              They involve crafting visually appealing interfaces while ensuring
              seamless functionality and user satisfaction.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              Web design involves creating visually appealing and functional
              websites. It encompasses various elements such as layout design,
              color schemes, typography, and user experience considerations.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              App design involves creating user-centric and visually appealing
              interfaces for mobile applications. It requires a deep
              understanding of user interactions, mobile platform guidelines,
              and seamless integration of functionality and aesthetics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
