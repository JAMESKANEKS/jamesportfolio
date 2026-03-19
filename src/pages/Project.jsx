import "../pages/Project.css";
import { motion } from 'framer-motion';
import memoria from "../assets/images/memoria.png";
import paint from "../assets/images/paint.png";
import diagnostic from "../assets/images/diagnostic.png";
import rental from "../assets/images/north8.png";
import { 
  FolderIcon,
  BuildingOfficeIcon,
  HeartIcon,
  CubeIcon,
  StarIcon,
  ArrowTopRightOnSquareIcon
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
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="projects-section">
      <div className="projects-background"></div>
      <div className="projects-decoration"></div>
      <div className="spacer"></div>
      
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="projects-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Projects
        </motion.h1>
        <motion.p 
          className="projects-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A showcase of my recent work and client projects
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="project-category"
          variants={itemVariants}
        >
          <motion.h2 
            className="category-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="category-icon-wrapper"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <StarIcon className="category-icon" />
            </motion.div>
            Featured Project
          </motion.h2>
          <motion.div 
            className="project-card featured"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div 
              className="project-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.img 
                src={memoria} 
                alt="Memoria Project" 
                className="project-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="project-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.span 
                  className="project-badge"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Capstone
                </motion.span>
              </motion.div>
            </motion.div>
            <motion.div 
              className="project-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.h3 
                className="project-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Memoria
              </motion.h3>
              <motion.p 
                className="project-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                A Digital Web-based YearBook platform for preserving memories and connections
              </motion.p>
              <motion.div 
                className="project-tech"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <motion.span 
                  className="tech-tag"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                >
                  Web App
                </motion.span>
                <motion.span 
                  className="tech-tag"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 2.0 }}
                >
                  Full Stack
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="project-category"
          variants={itemVariants}
        >
          <motion.h2 
            className="category-title"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="category-icon-wrapper"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <BuildingOfficeIcon className="category-icon" />
            </motion.div>
            Client Projects
          </motion.h2>
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="project-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="project-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.img 
                  src={rental} 
                  alt="Rental Project" 
                  className="project-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <motion.span 
                    className="project-badge"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    Client
                  </motion.span>
                </motion.div>
              </motion.div>
              <motion.div 
                className="project-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.h3 
                  className="project-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <motion.div
                    className="project-icon-wrapper"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    <BuildingOfficeIcon className="project-icon" />
                  </motion.div>
                  North8 Cebu
                </motion.h3>
                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  Rental Website with integrated Blog and Business management system
                </motion.p>
                <motion.div 
                  className="project-tech"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <motion.span 
                    className="tech-tag"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.0 }}
                  >
                    Business
                  </motion.span>
                  <motion.span 
                    className="tech-tag"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.2 }}
                  >
                    CMS
                  </motion.span>
                </motion.div>
                <motion.a 
                  href="https://north8cebu.com/" 
                  className="project-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <motion.svg 
                    className="link-icon" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="project-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="project-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.img 
                  src={diagnostic} 
                  alt="Diagnostic Project" 
                  className="project-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <motion.span 
                    className="project-badge"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    Client
                  </motion.span>
                </motion.div>
              </motion.div>
              <motion.div 
                className="project-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <motion.h3 
                  className="project-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <motion.div
                    className="project-icon-wrapper"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    <HeartIcon className="project-icon" />
                  </motion.div>
                  Toledo Doctors
                </motion.h3>
                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  Diagnostic System with POS and comprehensive Service Management
                </motion.p>
                <motion.div 
                  className="project-tech"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                >
                  <motion.span 
                    className="tech-tag"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.2 }}
                  >
                    Healthcare
                  </motion.span>
                  <motion.span 
                    className="tech-tag"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.4 }}
                  >
                    POS
                  </motion.span>
                </motion.div>
  
              </motion.div>
            </motion.div>

            <motion.div 
              className="project-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="project-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <motion.img 
                  src={paint} 
                  alt="Paint Project" 
                  className="project-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <motion.span 
                    className="project-badge"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    Client
                  </motion.span>
                </motion.div>
              </motion.div>
              <motion.div 
                className="project-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <motion.h3 
                  className="project-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <motion.div
                    className="project-icon-wrapper"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                  >
                    <CubeIcon className="project-icon" />
                  </motion.div>
                  Paint Inventory
                </motion.h3>
                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                >
                  POS system with advanced Inventory Management for paint business
                </motion.p>
                <motion.div 
                  className="project-tech"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                >
                  <motion.span 
                    className="tech-tag"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.4 }}
                  >
                    Inventory
                  </motion.span>
                  <motion.span 
                    className="tech-tag"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2.6 }}
                  >
                    POS
                  </motion.span>
                </motion.div>
                
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
