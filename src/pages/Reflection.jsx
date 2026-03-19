import "../pages/reflection.css";
import { motion } from 'framer-motion';
import { BookOpenIcon, LightBulbIcon, UserGroupIcon, SparklesIcon, AcademicCapIcon, CodeBracketIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

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
    <section className="reflection-section">
      <div className="reflection-background"></div>
      <div className="reflection-decoration-1"></div>
      <div className="reflection-decoration-2"></div>
      <div className="spacer"></div>
      
      <motion.div 
        className="reflection-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="reflection-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="reflection-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Reflection and Learning Journey
          </motion.h1>
        </motion.div>

        <motion.div 
          className="reflection-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="journey-timeline"
            variants={itemVariants}
          >
            <motion.div 
              className="timeline-item"
              variants={itemVariants}
            >
              <motion.div 
                className="timeline-icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                <AcademicCapIcon className="timeline-icon" />
              </motion.div>
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="timeline-title">Foundation & Early Learning</h3>
                <p className="timeline-description">
                  My journey in Information Technology has been a meaningful process of growth, discovery, and continuous learning. From my first year up to my fourth year of study, I gradually developed not only my technical skills but also my discipline, patience, and problem-solving mindset.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              variants={itemVariants}
            >
              <motion.div 
                className="timeline-icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                <CodeBracketIcon className="timeline-icon" />
              </motion.div>
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h3 className="timeline-title">Technical Development</h3>
                <p className="timeline-description">
                  In the beginning, I was introduced to basic concepts of programming, computer systems, and web development. At first, many topics were challenging, and I often made mistakes while writing code. However, through consistent practice, guidance from instructors, and self-study, I learned how to understand errors, debug programs, and improve my logic step by step.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              variants={itemVariants}
            >
              <motion.div 
                className="timeline-icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                <LightBulbIcon className="timeline-icon" />
              </motion.div>
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <h3 className="timeline-title">Practical Application</h3>
                <p className="timeline-description">
                  As I progressed, I gained experience in building websites and simple applications. I learned the importance of clean code, proper planning, and user-centered design. Working on projects helped me understand how theory is applied in real-world scenarios, and how teamwork, communication, and time management play a big role in successful development.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              variants={itemVariants}
            >
              <motion.div 
                className="timeline-icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                <BriefcaseIcon className="timeline-icon" />
              </motion.div>
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <h3 className="timeline-title">Professional Growth</h3>
                <p className="timeline-description">
                  My experience as a freelance web developer further shaped my confidence and responsibility. Handling client requirements taught me how to listen carefully, manage deadlines, and deliver quality output. Each project, whether small or complex, became an opportunity to improve my technical skills and professional attitude.
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="timeline-item"
              variants={itemVariants}
            >
              <motion.div 
                className="timeline-icon-wrapper"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                >
                <SparklesIcon className="timeline-icon" />
              </motion.div>
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
              >
                <h3 className="timeline-title">Continuous Learning</h3>
                <p className="timeline-description">
                  Looking back, I am proud of how far I have come. This journey taught me that learning in IT never stops. I remain dedicated to improving my skills, learning new technologies, and growing as a professional who can contribute positively to the industry and to every organization I work with.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
