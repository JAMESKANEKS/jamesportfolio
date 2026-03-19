import '../pages/resume.css';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ArrowDownTrayIcon, 
  UserIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

export default function Resume() {
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

  return (
    <section className="resume-section">
      <div className="spacer"></div>
      <div className="resume-background"></div>
      <div className="resume-decoration-1"></div>
      <div className="resume-decoration-2"></div>
      
      <motion.div 
        className="resume-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="resume-header"
          variants={itemVariants}
        >
          <motion.h1 
            className="resume-title"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="resume-subtitle"
            variants={itemVariants}
          >
            Feel free to reach out for collaborations or opportunities
          </motion.p>
        </motion.div>

        <motion.div 
          className="contact-cards"
          variants={containerVariants}
        >
          <motion.div 
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-icon-wrapper facebook">
              <svg className="card-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">Facebook</h3>
              <p className="card-detail">James Francis E. Rodriguez</p>
              <a 
                href="https://www.facebook.com/jarancisf.rodriguez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-link"
              >
                Visit Profile
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-icon-wrapper linkedin">
              <svg className="card-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">LinkedIn</h3>
              <p className="card-detail">James Francis E. Rodriguez</p>
              <a 
                href="https://www.linkedin.com/in/jamesf-rodriguez/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-link"
              >
                Visit Profile
              </a>
            </div>
          </motion.div>

          

          <motion.div 
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-icon-wrapper email">
              <EnvelopeIcon className="card-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Email</h3>
              <p className="card-detail">jamesfrancisrodriguezz@gmail.com</p>
              <a 
                href="mailto:jamesfrancisrodriguezz@gmail.com" 
                className="card-link"
              >
                Send Message
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-icon-wrapper phone">
              <PhoneIcon className="card-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Phone</h3>
              <p className="card-detail">09366253640 / 09272737470</p>
              <a 
                href="tel:+639366253640" 
                className="card-link"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-card"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-icon-wrapper location">
              <MapPinIcon className="card-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Address</h3>
              <p className="card-detail">Calong-calong Toledo City, Cebu</p>
              <p className="card-detail">Philippines 6038</p>
              <a 
                href="https://maps.google.com/?q=Toledo+City+Cebu+Philippines" 
                target="_blank"
                rel="noopener noreferrer" 
                className="card-link"
              >
                View on Map
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="resume-download-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="download-icon-wrapper">
              <DocumentTextIcon className="download-icon" />
            </div>
            <div className="download-content">
              <h3 className="download-title">Download My Resume</h3>
              <p className="download-description">
                Get a comprehensive overview of my experience, skills, and qualifications
              </p>
              <motion.a 
                href="https://drive.google.com/file/d/16qoCKbSC1zExbcCC44rvym6n2X2OCyWW/view?usp=sharing" 
                download
                className="download-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowDownTrayIcon className="button-icon" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
