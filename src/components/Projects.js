// Projects.js

import React from "react";

const Projects = () => {
  // Assuming you have an array of projects
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1...",
      // Other properties like image, link, etc.
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2...",
      // Other properties
    },
    // Add more projects as needed
  ];

  return (
    <div className="container">
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* You can add images, links, or any other details */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
