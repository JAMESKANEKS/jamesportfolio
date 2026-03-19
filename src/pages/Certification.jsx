import cert from '../assets/images/cert1.jpg';
import "../pages/cert.css";
import certone from '../assets/images/cert2.png';
import learn from '../assets/images/csslearn.png';
import certthree from '../assets/images/cert3.png';
import certfour from '../assets/images/cert4.png';
import { motion } from 'framer-motion';
import { 
  TrophyIcon, 
  DocumentCheckIcon, 
  CodeBracketIcon, 
  ScaleIcon, 
  BriefcaseIcon, 
  SparklesIcon, 
  AcademicCapIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

export default function Educational() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const certifications = [
    {
      id: 2,
      title: "React Skill Certificate",
      image: certone,
      category: "React",
      description: "The bearer of this certificate has passed the HackerRank skill certification test",
      icon: "CodeBracketIcon",
      details: "Comprehensive assessment of technical competencies and best practices"
    },
    {
      id: 3,
      title: "CSS Course Certificate",
      image: learn,
      category: "CSS",
      description: "Succesfully completed all course material in the Learn CSS Course",
      icon: "DocumentCheckIcon",
      details: "Mastery of advanced CSS concepts including animations, responsive design, and modern best practices"
    },
    {
      id: 4,
      title: "HTML Course Certificate",
      image: certthree,
      category: "HTML",
      description: "Succesfully completed all course material in the Learn HTML Course",
      icon: "ScaleIcon",
      details: "Demonstrates advanced proficiency in professional development and project management"
    },
    {
      id: 5,
      title: "SQL skill Certificate",
      image: certfour,
      category: "SQL",
      description: "The bearer of this certificate has passed the HackerRank skill certification test",
      icon: "ShieldCheckIcon",
      details: "Validates expertise in specialized technical areas and industry best practices"
    }
  ];

  return (
    <section className="cert-section">
      <div className="cert-background"></div>
      <div className="cert-decoration-1"></div>
      <div className="cert-decoration-2"></div>
      <div className="spacer"></div>
      
      <motion.div 
        className="cert-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="cert-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="cert-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My Certifications
          </motion.h1>
        </motion.div>

        <motion.div 
            className="cert-subtitle"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Professional certifications that validate my skills and expertise
            </motion.div>

        <motion.div 
          className="cert-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="cert-grid"
            variants={itemVariants}
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.id}
                className="cert-card"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="cert-image-container"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <motion.img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="cert-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div 
                  className="cert-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                >
                  <motion.span 
                    className="cert-category"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  >
                    {cert.category}
                  </motion.span>
                </motion.div>
                <motion.div 
                  className="cert-content"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.8 + 0.4 }}
                >
                  <h3 className="cert-name">{cert.title}</h3>
                  <p className="cert-description">{cert.description}</p>
                  <motion.a 
                    className="cert-view-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(cert.image, '_blank')}
                  >
                    <span className="btn-text">View Certificate</span>
                    <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
