import React, { useState } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaVideo, FaPenFancy } from 'react-icons/fa';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const webProjects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React, featuring smooth animations and dark mode support.",
      technologies: ["React", "CSS3", "JavaScript", "Framer Motion"],
      github: "https://github.com/AbhiYadav2003/portfolio-website",
      live: "https://abhiyadav.vercel.app"
    },
    // Add more web projects here
  ];

  const videoProjects = [
    {
      title: "Product Showcase",
      description: "A dynamic product showcase video highlighting key features and benefits.",
      technologies: ["Adobe Premiere Pro", "After Effects", "Motion Graphics"],
      video: "https://youtube.com/your-video-link"
    },
    // Add more video projects here
  ];

  const contentProjects = [
    {
      title: "Tech Blog Series",
      description: "A comprehensive series of articles about modern web development practices and technologies.",
      technologies: ["Technical Writing", "SEO", "Content Strategy"],
      link: "https://your-blog-link.com"
    },
    // Add more content projects here
  ];

  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <p>Explore my work across different domains</p>

      <div className="project-tabs">
        <button 
          className={`tab-button ${activeTab === 'web' ? 'active' : ''}`}
          onClick={() => setActiveTab('web')}
        >
          <FaGithub /> Web Development
        </button>
        <button 
          className={`tab-button ${activeTab === 'video' ? 'active' : ''}`}
          onClick={() => setActiveTab('video')}
        >
          <FaVideo /> Video Editing
        </button>
        <button 
          className={`tab-button ${activeTab === 'content' ? 'active' : ''}`}
          onClick={() => setActiveTab('content')}
        >
          <FaPenFancy /> Content Writing
        </button>
      </div>

      <div className="project-grid">
        {activeTab === 'web' && webProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} live demo`}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {activeTab === 'video' && videoProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Watch ${project.title} video`}
                >
                  <FaVideo /> Watch Video
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {activeTab === 'content' && contentProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Read ${project.title} article`}
                >
                  <FaPenFancy /> Read Article
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;