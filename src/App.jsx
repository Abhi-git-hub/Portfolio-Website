import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './pages/Footer';
import './App.css';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <HelmetProvider>
      <div className={`app ${isDark ? 'dark' : ''}`}>
        <Helmet>
          <title>AbhiYadav - Portfolio | Full Stack Developer</title>
          <meta name="description" content="AbhiYadav's portfolio showcasing full-stack development projects, certifications, and professional experience. Specializing in React, Node.js, and modern web technologies." />
          <meta name="keywords" content="AbhiYadav, Full Stack Developer, React Developer, Portfolio, Web Development, JavaScript, Node.js" />
          <meta name="author" content="AbhiYadav" />
          <meta property="og:title" content="AbhiYadav - Portfolio | Full Stack Developer" />
          <meta property="og:description" content="Explore AbhiYadav's portfolio showcasing full-stack development projects and professional experience." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://abhiyadav.vercel.app" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AbhiYadav - Portfolio | Full Stack Developer" />
          <meta name="twitter:description" content="Explore AbhiYadav's portfolio showcasing full-stack development projects and professional experience." />
          <link rel="canonical" href="https://abhiyadav.vercel.app" />
        </Helmet>

        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle dark mode"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </motion.button>

        <motion.nav
          className="nav-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          role="navigation"
          aria-label="Main navigation"
        >
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            aria-current={activeSection === 'home' ? 'page' : undefined}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            aria-current={activeSection === 'about' ? 'page' : undefined}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            aria-current={activeSection === 'projects' ? 'page' : undefined}
          >
            Projects
          </a>
          <a 
            href="#certifications" 
            className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
            aria-current={activeSection === 'certifications' ? 'page' : undefined}
          >
            Certifications
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            aria-current={activeSection === 'contact' ? 'page' : undefined}
          >
            Contact
          </a>
        </motion.nav>

        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <section id="home" className="section">
              <Home />
            </section>

            <section id="about" className="section">
              <About />
            </section>

            <section id="projects" className="section">
              <Projects />
            </section>

            <section id="certifications" className="section">
              <Certifications />
            </section>

            <section id="contact" className="section">
              <Contact />
            </section>
          </Suspense>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;