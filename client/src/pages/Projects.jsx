import React from "react";



const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            subtitle: 'A short subtitle for project one',
            description: 'This is the description for project one.',
            launchDate: '2024-08-14',
            duration: 500,
            goal: 1000,
            imageUrl: 'https://via.placeholder.com/150',
          },
          {
            id: 2,
            title: 'Project Two',
            subtitle: 'A short subtitle for project two',
            description: 'This is the description for project two.',
            launchDate: '2024-09-01',
            duration: 300,
            goal: 2000,
            imageUrl: 'https://via.placeholder.com/150',
          },

    ]

    return (
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
              <p>Launch Date: {project.launchDate}</p>
              <p>Duration: {project.duration} minutes</p>
              <p>Goal: ${project.goal}</p>
            </div>
          ))}
        </div>
    )

}

export default Projects;