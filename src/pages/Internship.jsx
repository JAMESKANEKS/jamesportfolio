import cebeco from '../assets/images/cebeco.jpg';
import "../pages/Internship.css";
import imgone from '../assets/images/img1.jpg';
import imgtwo from '../assets/images/img2.jpg';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

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

  const imageVariants = {
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
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="internship-section">
      <div className="internship-background"></div>
      <div className="internship-decoration"></div>
      <div className="spacer"></div>
      
      <motion.div 
        className="internship-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="internship-title"
          variants={itemVariants}
        >
          Internship Details
        </motion.h1>
        
        <motion.div 
          className="main-content"
          variants={itemVariants}
        >
          <motion.div 
            className="company-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="company-image-container"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.img 
                src={cebeco} 
                alt="Cebeco Internship" 
                className="cebeco"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div 
              className="company-info"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h3 
                className="company-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Cebu III Electric Cooperative Inc.
              </motion.h3>
              
              <motion.div 
                className="internship-details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.div 
                  className="detail-item"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  <CalendarIcon className="detail-icon" />
                  <span>June 2025 - September 2025</span>
                  <strong className="duration">500 hours</strong>
                </motion.div>
                
                <motion.div 
                  className="detail-item"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  <UserGroupIcon className="detail-icon" />
                  <span>Industry Experience</span>
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="internship-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                Handled basic accounting duties such as cash distribution per department, encoding of payment receipts and maintaining financial records. Also assisted in document filing, data encoding, and record management to ensure accurate and organized office documents.
              </motion.p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="gallery-section"
            variants={itemVariants}
          >
            <motion.h4 
              className="gallery-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <motion.div 
                className="title-icon-wrapper small"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <SparklesIcon className="title-icon small" />
              </motion.div>
              Project Gallery
            </motion.h4>
            
            <motion.div 
              className="images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <motion.div 
                className="image-card"
                variants={imageVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={imgone} 
                  alt="Internship Project 1" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="image-card"
                variants={imageVariants}
                whileHover="hover"
              >
                <motion.img 
                  src={imgtwo} 
                  alt="Internship Project 2" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
