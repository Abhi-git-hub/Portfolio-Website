import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaCode, FaEdit, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const skillVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const skills = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React, HTML5, Tailwindcss & JavaScript."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and MongoDB."
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      description: "Developing end-to-end solutions with MERN stack and modern web technologies."
    },
    {
      icon: <FaEdit />,
      title: "Video Editing",
      description: "Producing and editing videos for social media platforms using Da Vinci Resolve, Photoshop & Gen AI."
    }
  ];

  return (
    <motion.section 
      className="about-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="about-intro"
      >
       I’m a self-taught explorer at heart, always eager to dive into something new. Whether I’m coding up a fresh idea, writing to share my thoughts, or editing to make things shine, I find joy in every step of the creative process.
      </motion.p>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div 
              className="skill-icon"
              variants={skillVariants}
              whileHover="hover"
            >
              {skill.icon}
            </motion.div>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="about-content"
        variants={containerVariants}
      >
        <motion.div 
          className="about-text"
          variants={itemVariants}
        >
          <h2>My Journey</h2>
          <p>
          Fueled by curiosity and a passion for self-learning, I have carved my own path in the world of technology. I love to code, write, and edit—constantly exploring new ideas and transforming them into creative projects. Every line of code, every story, and every edit reflects my commitment to growth and my belief that learning never stops.
          </p>
          <p>
            My approach combines technical expertise with creative problem-solving,
            ensuring that every project I work on is not only functional but also
            provides an exceptional user experience.
          </p>
        </motion.div>

        <motion.div 
          className="education"
          variants={itemVariants}
        >
          <h2>Education</h2>
          <div className="education-item">
            <h3>Completed Class 12th in 2023</h3>
            <p></p>
            <p> Adding new skills daily in my armory.</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;