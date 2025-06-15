import React, { useState } from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaVideo, FaPenFancy } from 'react-icons/fa';
import eternalHorizonsImg from '../assets/Eternal Horizons.png';

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
      github: "https://github.com/Abhi-git-hub/Portfolio-Website",
      live: "https://abhiyadavwebsite.vercel.app/"
    },
    {
      title: "Adhyayan Classes",
      description: "A comprehensive management system for coaching institutes, featuring student and teacher portals with attendance tracking, study materials, and test score management.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/Abhi-git-hub/Adhyayan",
      live: "https://adhyayannwebsite.vercel.app/login"
    }
    // Add more web projects here
  ];

  const videoProjects = [
    {
      title: "Instagram Reel 1",
      description: "A creative video edit showcasing dynamic transitions and effects.",
      technologies: ["Da Vinci Resolve", "Fusion", "Photoshop"],
      video: "https://www.instagram.com/reel/DKh6IADzipn",
      type: "instagram"
    },
    {
      title: "Instagram Reel 2",
      description: "An engaging video with smooth transitions and visual effects.",
      technologies: ["Da Vinci Resolve", "Fusion", "Photoshop"],
      video: "https://www.instagram.com/reel/DKFJvX5z2vo",
      type: "instagram"
    },
    {
      title: "YouTube Short 1",
      description: "A short-form video with creative editing and effects.",
      technologies: ["Da Vinci Resolve", "GenAI", "AI Voice"],
      video: "https://youtube.com/shorts/qHcx5OtqGp8",
      type: "youtube"
    },
    {
      title: "YouTube Short 2",
      description: "A dynamic short video showcasing editing skills.",
      technologies: ["Da Vinci Resolve", "GenAI", "AI Voice "],
      video: "https://youtube.com/shorts/AsXQPoMVla8",
      type: "youtube"
    }
  ];

  const contentProjects = [
    {
      title: "Eternal Horizons",
      description: "An engaging e-book that takes readers on a journey through captivating narratives and thought-provoking themes.",
      technologies: ["Creative Writing", "Digital Publishing", "Storytelling"],
      link: "https://www.amazon.com/dp/B0F9TX1W1C"
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
                {project.type === 'instagram' ? (
                  <iframe
                    src={`https://www.instagram.com/p/${project.video.split('/').pop()}/embed`}
                    width="100%"
                    height="450"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency="true"
                    style={{ marginTop: '1rem' }}
                    title={`Instagram Reel: ${project.title}`}
                  />
                ) : (
                  <iframe
                    src={project.video.replace('shorts/', 'embed/')}
                    width="100%"
                    height="450"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ marginTop: '1rem' }}
                    title={`YouTube Short: ${project.title}`}
                  />
                )}
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
              {project.title === "Eternal Horizons" && (
                <img 
                  src={eternalHorizonsImg} 
                  alt="Eternal Horizons Book Cover" 
                  className="project-image"
                  style={{ width: '100%', maxWidth: '300px', marginBottom: '1rem', borderRadius: '8px' }}
                />
              )}
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
                  <FaPenFancy /> Get E-book
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
