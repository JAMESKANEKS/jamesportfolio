import "./MainSections.css";
import profilePic from "../assets/images/profile.jpg";
import { useEffect } from "react";
import { motion } from "framer-motion";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import php from "../assets/images/php.png";
import react from "../assets/images/react.png";
import express from "../assets/images/express.png";
import tailwind from "../assets/images/tailwind.png";
import ctu from "../assets/images/ctu.png";
import tnvs from "../assets/images/tnvs.png";
import matabang from "../assets/images/matabang.jpg";
import cctc from "../assets/images/cctc.png";
import firebase from "../assets/images/firebase.png";
import postresql from "../assets/images/Postgresql.png";
import mysql from "../assets/images/mysql.png";
import bgvideo from "/videos/bg.mp4"

export default function MainSections() {

useEffect(() => {
    const boxes = document.querySelectorAll(".container, .trans, .html, .css, .javascript, .php, .react, .tailwind, .express, .mysql, .postgresql, .firebase, .text-show");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    boxes.forEach(box => observer.observe(box));

    // iOS video autoplay fix
    const video = document.querySelector('video');
    let handleUserInteraction;
    
    if (video) {
      // Attempt to play video programmatically for iOS
      const playVideo = () => {
        video.play().catch(error => {
          console.log('Autoplay prevented:', error);
        });
      };

      // Try to play immediately
      playVideo();

      // Also try on user interaction
      handleUserInteraction = () => {
        playVideo();
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      };

      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);
    }

    return () => {
      observer.disconnect();
      if (video && handleUserInteraction) {
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      }
    };
  }, []);

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

  const skillCardVariants = {
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
      scale: 1.05,
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section id="home" className="home">
        <div className="spacer"></div>
        <div style={{ 
          position: "relative", 
          width: "100%", 
          height: "100vh", 
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <video 
            src={bgvideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            style={{ 
              position: "absolute", 
              top: "50%",
              left: "50%",
              zIndex: "1",
              objectFit: "cover",
              width: "100vw",
              height: "100vh",
              minWidth: "100vw",
              minHeight: "100vh",
              transform: "translate(-50%, -50%)"
            }}
          />
          <div 
            className="filter" 
            style={{ 
              position: "absolute", 
              top: "0",
              left: "0",
              zIndex: "2",
              width: "100vw",
              height: "100vh",
              background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)",
            }}
          />
          <motion.div 
            className="container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ 
              position: "relative", 
              zIndex: "3",
              maxWidth: "1200px",
              width: "100%",
              padding: "0 20px"
            }}
          >
          <motion.div className="info" variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Web & App <span className="text-blue-600 font-light">Developer</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-4 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              I am James Francis E. Rodriguez a Web and Software developer who builds functional, responsive, and modern digital solutions.
              <br />
              focusing on creating websites and software that are easy to use, efficient, and tailored to client needs.
            </motion.p>
            <motion.p 
              className="text-gray-700 font-medium mb-8"
              variants={itemVariants}
            >
              <strong>Developer</strong> based in Cebu City Philippines
            </motion.p>
            <motion.div 
              className="bots flex gap-4"
              variants={itemVariants}
            >
              <motion.a 
                href="/project" 
                className="inline-block"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <button>
                  View My Projects
                </button>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="profile"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={profilePic} 
              alt="Profile" 
              className="w-80 h-80 rounded-2xl shadow-2xl object-cover"
            />

          </motion.div>
        </motion.div>
      </div>
      </section>

      <section id="about">
        <motion.div 
          className="trans max-w-4xl mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{marginBottom: "30px"}}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-lg leading-relaxed text-gray-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I am <strong className="text-blue-400">James Francis E. Rodriguez</strong>. I have completed four years of study in Bachelor of Science in Information Technology (BSIT).
            <br /><br />
            While pursuing my degree, I actively worked as a freelancer, developing websites and application systems for various clients.
            <br /><br />
            This experience allowed me to apply my academic knowledge to real-world projects, strengthen my problem-solving skills,
            and gain hands-on experience in building functional, user-friendly, and efficient digital solutions.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="cards px-6 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-show text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{textAlign: "center", marginTop: "50px"}}
          >
            My Programming Languages
          </motion.h2>
          
          <motion.div 
            className="card1 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { img: html, title: "HYPER MARKUP", subtitle: "LANGUAGE", className: "html" },
              { img: css, title: "CASCADING STYLE", subtitle: "SHEETS", className: "css" },
              { img: js, title: "JAVASCRIPT", subtitle: "", className: "javascript" },
              { img: php, title: "HYPERTEXT", subtitle: "PREPROCESSOR", className: "php" }
            ].map((skill, index) => (
              <motion.div
                key={skill.className}
                className={skill.className}
                variants={skillCardVariants}
                whileHover="hover"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <img 
                    src={skill.img} 
                    alt={skill.title} 
                    className="w-20 h-20 mx-auto mb-4 object-contain"
                  />
                  <p className="text-center text-sm font-semibold text-white">
                    {skill.title}
                    {skill.subtitle && <><br />{skill.subtitle}</>}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="cards px-6 py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-show text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{textAlign: "center"}}
            >
              Frameworks
            </motion.h2>
            
            <motion.div 
              className="card2 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { img: react, title: "REACT / REACT NATIVE", className: "react" },
                { img: tailwind, title: "TAILWIND CSS", className: "tailwind" },
                { img: express, title: "EXPRESS JS", className: "express" }
              ].map((framework, index) => (
                <motion.div
                  key={framework.className}
                  className={framework.className}
                  variants={skillCardVariants}
                  whileHover="hover"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img 
                      src={framework.img} 
                      alt={framework.title} 
                      className="w-20 h-20 mx-auto mb-4 object-contain"
                    />
                    <p className="text-center text-sm font-semibold text-white">{framework.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="cards px-6 py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-show text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{textAlign: "center"}}
            >
              Database
            </motion.h2>
            
            <motion.div 
              className="card2 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { img: mysql, title: "MYSQL", className: "mysql" },
                { img: postresql, title: "POSTGRESQL", className: "postgresql" },
                { img: firebase, title: "FIREBASE", className: "firebase" }
              ].map((database, index) => (
                <motion.div
                  key={database.className}
                  className={database.className}
                  variants={skillCardVariants}
                  whileHover="hover"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img 
                      src={database.img} 
                      alt={database.title} 
                      className="w-20 h-20 mx-auto mb-4 object-contain"
                    />
                    <p className="text-center text-sm font-semibold text-white">{database.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section id="educational" className="educational-section">
        <div className="educational-background"></div>
        <div className="educational-decoration"></div>
        
        <motion.div 
          className="educational-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="educational-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Educational Journey
          </motion.h1>
          <motion.p 
            className="educational-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My academic background and educational achievements
          </motion.p>
        </motion.div>

        <motion.div 
          className="card3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="educational-cards-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="education-card cctc"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="card-image-container">
                <img 
                  src={cctc} 
                  alt="Consolatrix College" 
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <div className="card-badge graduate">Graduate</div>
                <h3 className="card-title">Consolatrix College of Toledo City</h3>
                <p className="card-period">2022-2026</p>
                <p className="card-description">Bachelor of Science in Information Technology</p>
                <div className="card-details">
                  <span className="detail-item">🎓 BSIT</span>
                  <span className="detail-item">📍 Toledo City</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="education-card ctu"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="card-image-container">
                <img 
                  src={ctu} 
                  alt="Cebu Technological University" 
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <div className="card-badge transferred">Transferred</div>
                <h3 className="card-title">Cebu Technological University</h3>
                <p className="card-period">2021-2022</p>
                <p className="card-description">Bachelor in Industrial Computer Technology</p>
                <div className="card-details">
                  <span className="detail-item">🎓 BICT</span>
                  <span className="detail-item">📍 Cebu City</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="educational-cards-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="education-card tnvs"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="card-image-container">
                <img 
                  src={tnvs} 
                  alt="Toledo National Vocational School" 
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">Toledo National Vocational School</h3>
                <p className="card-period">2015-2020</p>
                <div className="card-details">
                  <span className="detail-item">🎓 High School</span>
                  <span className="detail-item">📍 Toledo City</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="education-card matabang"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="card-image-container">
                <img 
                  src={matabang} 
                  alt="Matab-ang Elementary School" 
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">Matab-ang Elementary School</h3>
                <p className="card-period">2009-2015</p>
                <div className="card-details">
                  <span className="detail-item">🎓 Elementary</span>
                  <span className="detail-item">📍 Toledo City</span>
                </div>
              </div>
            </motion.div>
            
            
          </motion.div>
        </motion.div>
      </section>

      <section id="skills" className="skills-section" >
        <div className="skills-background"></div>
        <div className="skills-bg-decoration-1"></div>
        <div className="skills-bg-decoration-2"></div>
        
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="skills-title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.h1>
          <motion.p 
            className="skills-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive overview of my technical and soft skills
          </motion.p>
        </motion.div>

        <motion.div 
          className="skills-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Technical Skills */}
          <motion.div 
            className="skills-card technical-skills"
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="skills-section-header"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="skills-section-title technical">Technical Skills</h2>
            </motion.div>
            
            <div className="skills-cards-container">
              {[
                { icon: "🌐", title: "Web Development", skills: "HTML, CSS, PHP, JavaScript", color: "blue" },
                { icon: "⚛️", title: "Frameworks", skills: "React JS - Vite, Tailwind CSS", color: "cyan" },
                { icon: "🗄️", title: "Database Management", skills: "MySQL, SQL Server, Firebase", color: "green" },
                { icon: "🎨", title: "Graphic Design", skills: "Canva, Figma, WordPress", color: "purple" },
                { icon: "📊", title: "Microsoft Office", skills: "Word, Excel, PowerPoint", color: "orange" },
                { icon: "🔧", title: "Hardware & Software", skills: "Computer Troubleshooting", color: "red" },
                { icon: "🌐", title: "Networking", skills: "Basic Networking", color: "indigo" },
                { icon: "🎬", title: "Video Editing", skills: "Capcut, Filmora, Adobe", color: "pink" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className={`skill-card ${skill.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="skill-card-header">
                    <div className={`skill-icon ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <h3 className="skill-title">{skill.title}</h3>
                  </div>
                  <p className="skill-description">{skill.skills}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div 
            className="skills-card soft-skills"
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="skills-section-header"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="skills-section-title soft">Soft Skills</h2>
            </motion.div>
            
            <div className="skills-cards-container">
              {[
                { icon: "🔍", title: "Strong Attention to Detail", color: "purple" },
                { icon: "💡", title: "Problem-Solving & Critical Thinking", color: "pink" },
                { icon: "🔄", title: "Adaptability & Willingness to Learn", color: "indigo" },
                { icon: "⏰", title: "Time Management & Organization", color: "blue" },
                { icon: "💬", title: "Effective Communication", color: "green" },
                { icon: "🤝", title: "Team Collaboration", color: "orange" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className={`skill-card ${skill.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="skill-card-header">
                    <div className={`skill-icon ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <h3 className="skill-title">{skill.title}</h3>
                  </div>
                  <div className="skill-progress">
                    <motion.div 
                      className={`skill-progress-bar ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
