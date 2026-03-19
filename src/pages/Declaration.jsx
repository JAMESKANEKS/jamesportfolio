import "../pages/declaration.css";
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  DocumentTextIcon, 
  UserGroupIcon, 
  ScaleIcon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  HeartIcon, 
  LightBulbIcon 
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
        staggerChildren: 0.3
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
    hidden: { opacity: 0, scale: 0.9, rotateY: 90 },
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
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="declaration-section">
      <div className="declaration-background"></div>
      <div className="declaration-decoration-1"></div>
      <div className="declaration-decoration-2"></div>
      <div className="spacer"></div>
      
      <motion.div 
        className="declaration-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="declaration-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="declaration-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Declaration and Ethics
          </motion.h1>
        </motion.div>

        <motion.div 
          className="declaration-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="ethics-grid"
            variants={itemVariants}
          >
            <motion.div 
              className="ethics-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="card-icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                <DocumentTextIcon className="card-icon" />
              </motion.div>
              <motion.div 
                className="card-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="card-title">Truth & Authenticity</h3>
                <p className="card-description">
                  I hereby declare that all the information and projects presented in this portfolio are true, original, and created by me to the best of my knowledge and ability. Any references, sources, or collaborative works have been properly acknowledged.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="ethics-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="card-icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                <HeartIcon className="card-icon" />
              </motion.div>
              <motion.div 
                className="card-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <h3 className="card-title">Professional Ethics</h3>
                <p className="card-description">
                  I commit myself to uphold professional ethics in all aspects of my work. I value honesty, integrity, and responsibility in dealing with clients, colleagues, and organizations. I respect confidentiality, intellectual property rights, and data privacy in every project I handle.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="ethics-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="card-icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                <ScaleIcon className="card-icon" />
              </motion.div>
              <motion.div 
                className="card-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <h3 className="card-title">Quality & Responsibility</h3>
                <p className="card-description">
                  I strive to deliver quality work, meet agreed deadlines, and communicate clearly and respectfully. I am dedicated to continuous learning and improvement, and I aim to use my skills ethically and responsibly to contribute positively to the IT profession.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="ethics-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="card-icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                <LightBulbIcon className="card-icon" />
              </motion.div>
              <motion.div 
                className="card-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                <h3 className="card-title">Continuous Growth</h3>
                <p className="card-description">
                  I remain dedicated to continuous learning and improvement, and I aim to use my skills ethically and responsibly to contribute positively to the industry and to every organization I work with.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="commitment-section"
            variants={itemVariants}
          >
            <motion.div 
              className="commitment-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
              <motion.div 
                className="title-icon-wrapper small"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                >
                <UserGroupIcon className="title-icon small" />
              </motion.div>
              <h3 className="commitment-title">Professional Commitment</h3>
              <motion.p 
                className="commitment-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
              >
                I am committed to maintaining the highest standards of professional conduct and ethical behavior in all my professional endeavors.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
