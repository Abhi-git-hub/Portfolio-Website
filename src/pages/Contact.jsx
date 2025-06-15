import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
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

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
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

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.section 
      className="contact-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Contact Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </motion.p>
      <div className="contact-cards">
        <motion.div 
          className="contact-card"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div 
            className="contact-icon"
            variants={iconVariants}
          >
            <FaEnvelope />
          </motion.div>
          <motion.h2 variants={titleVariants}>Email</motion.h2>
          <motion.p variants={titleVariants}>Let's discuss your project</motion.p>
          <motion.a 
            href="mailto:number11abhiyadav@gmailcom" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Mail Abhi Yadav
          </motion.a>
        </motion.div>

        <motion.div 
          className="contact-card"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div 
            className="contact-icon"
            variants={iconVariants}
          >
            <FaLinkedin />
          </motion.div>
          <motion.h2 variants={titleVariants}>LinkedIn</motion.h2>
          <motion.p variants={titleVariants}>Connect with me professionally</motion.p>
          <motion.a 
            href="https://www.linkedin.com/in/abhi-yadav-2003/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Abhi Yadav
          </motion.a>
        </motion.div>

        <motion.div 
          className="contact-card"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div 
            className="contact-icon"
            variants={iconVariants}
          >
            <FaGithub />
          </motion.div>
          <motion.h2 variants={titleVariants}>GitHub</motion.h2>
          <motion.p variants={titleVariants}>Check out my projects</motion.p>
          <motion.a 
            href="https://github.com/AbhiYadav2003" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            @AbhiYadav2003
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;