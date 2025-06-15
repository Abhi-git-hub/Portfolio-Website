import React from 'react';
import './Home.css';
import Me from '../assets/Me.jpg';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
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

  const highlightVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const socialVariants = {
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
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      className="home-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-section">
        <motion.div 
          className="hero-left"
          variants={containerVariants}
        >
          <motion.div 
            className="hero-gradient-bar"
            variants={itemVariants}
          />
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Hi, I'm <span className="gradient-text">Abhi Yadav</span>
          </motion.h1>
          <motion.h2 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Full Stack Developer <span className="amp">&</span> UI/UX Enthusiast
          </motion.h2>
          <motion.p 
            className="hero-desc"
            variants={itemVariants}
          >
            I build exceptional and accessible digital experiences for the web. 
            Passionate about creating beautiful, functional, and user-friendly applications.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="hero-btn primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="hero-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div 
            className="social-links"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/AbhiYadav2003"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover="hover"
              className="social-link"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/abhi-yadav-2003/"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover="hover"
              className="social-link"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-right"
          variants={containerVariants}
        >
          <motion.img 
            src={Me} 
            alt="Abhi Yadav" 
            className="profile-image"
            variants={imageVariants}
            whileHover="hover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;