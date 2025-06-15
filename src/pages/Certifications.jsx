import React from 'react';
import './Certifications.css';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import cert1 from '../assets/cert-1.png';
import cert2 from '../assets/cert-2.png';
import cert3 from '../assets/cert-3.png';
import cert4 from '../assets/cert-4.png';
import cert5 from '../assets/cert-5.png';

const certifications = [
  {
    title: "Corel Draw",
    issuer: "Arth Institute",
    date: "2023",
    link: "https://example.com/certificate1",
    image: cert1
  },
  {
    title: "Web development",
    issuer: "Arth Institute",
    date: "2023",
    link: "https://example.com/certificate2",
    image: cert2
  },
  {
    title: "Photoshop",
    issuer: "Arth Institute",
    date: "2023",
    link: "https://example.com/certificate3",
    image: cert3
  },
  {
    title: "English Speaking",
    issuer: "Arth Institute",
    date: "2023",
    link: "https://example.com/certificate4",
    image: cert4
  },
  {
    title: "Web Designing",
    issuer: "Arth Institute",
    date: "2023",
    link: "https://example.com/certificate5",
    image: cert5
  }
  // Add more certifications as needed
];

function Certifications() {
  return (
    <motion.section 
      className="certifications-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Certifications
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Continuously learning and improving skills through professional certifications and courses.
      </motion.p>
      <div className="cert-grid">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="cert-icon">
              <img 
                src={cert.image} 
                alt={`${cert.title} certification`}
                loading="lazy"
                width="80"
                height="80"
              />
            </div>
            <div className="cert-content">
              <h2>{cert.title}</h2>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
                aria-label={`View ${cert.title} certificate`}
              >
                <FaExternalLinkAlt /> View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certifications;