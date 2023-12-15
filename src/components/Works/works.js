import React, { useState } from "react";
import "./works.css";
import pic1 from "../../assests/portfolio-1.png";
import pic2 from "../../assests/portfolio-2.png";
import pic3 from "../../assests/portfolio-3.png";
import pic4 from "../../assests/portfolio-4.png";
import pic5 from "../../assests/portfolio-5.png";
import pic6 from "../../assests/portfolio-6.png";
import p1 from "../../assests/project1.png";
import p2 from "../../assests/project2.png";
import p3 from "../../assests/project3.png";

const Works = () => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjects = () => {
    setShowProjects(!showProjects);
  };

  const personalProjects = [
    {
      id: 1,
      name: "Meme-Generator",
      link: "https://meme-generate-abhikurra.netlify.app/",
      description:
        "A web app that allows users to create memes by combining images and text.",
    },
    {
      id: 2,
      name: "Password-generator",
      link: "https://ak-password-generator.netlify.app/",
      description:
        "A tool that generates secure and random passwords based on specified criteria.",
    },
    {
      id: 3,
      name: "Tic-Tac-Toe",
      link: "https://aktictactoe.netlify.app/",
      description:
        "A classic game implemented in a digital format allowing two players to compete in a grid of three by three.",
    },
  ];
  const getImageForProject = (projectId) => {
    switch (projectId) {
      case 1:
        return p1;
      case 2:
        return p2;
      case 3:
        return p3;
      default:
        return null;
    }
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help business achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <img src={pic1} alt="work" className="worksImg" />
        <img src={pic2} alt="work" className="worksImg" />
        <img src={pic3} alt="work" className="worksImg" />
        <img src={pic4} alt="work" className="worksImg" />
        <img src={pic5} alt="work" className="worksImg" />
        <img src={pic6} alt="work" className="worksImg" />
      </div>
      <button className="workBtn" onClick={toggleProjects}>
        See More
      </button>
      {showProjects && (
        <div className="projects">
          <h2 className="project-heading">Personal Projects</h2>
          <ul className="work-content">
            {personalProjects.map((project) => (
              <li className="work-items" key={project.id}>
                <img
                  src={getImageForProject(project.id)}
                  alt={project.name}
                  className="projectImg"
                />
                <h3 className="work-h3">{project.name}</h3>
                <h2 className="work-h2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </h2>
                <p className="work-desc">{project.description}</p>
              </li>
            ))}
          </ul>
          <span>Remaining projects? Please check my GitHub repository.</span>
        </div>
      )}
    </section>
  );
};

export default Works;
