import "./MainSections.css";
import profilePic from "../assets/images/profile.png"; // Ensure the path is correct
import { useEffect } from "react";
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

export default function MainSections() {

useEffect(() => {
    const boxes = document.querySelectorAll(".container, .trans, .html, .css, .javascript, .php, .react, .tailwind, .express, .text-show");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    boxes.forEach(box => observer.observe(box));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="home" className="home">
        <div className="container">
            <div className="info">
            <h1>Web & App <span>Developer </span></h1>
            <p>I am a web and app developer who builds functional, responsive, and modern digital solutions.<br></br>focusing on creating websites and applications that are easy to use, efficient, and tailored to client needs.</p>
            <p className="p2"><strong>Developer</strong> based in Cebu City Philippines</p>
            <div className="bots">
               <a href="#about"><button>View my Projects</button></a>
            </div>
        </div>
        <div className="profile">
            <img src={profilePic} alt="Profile" />
        </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="trans">
        <h1 className="text-about">About Me</h1>
        <p>Hi i am <strong>James Francis E. Rodriguez</strong>. I have completed four years of study in Bachelor of Science in Information Technology (BSIT).<br></br> While pursuing my degree, I actively worked as a freelancer, developing websites and application systems for various clients.<br></br><br></br> This experience allowed me to apply my academic knowledge to real-world projects, strengthen my problem-solving skills,<br></br> and gain hands-on experience in building functional, user-friendly, and efficient digital solutions.</p>
       </div>
<div className="cards">
  <h1 className="text-show">My Programming Languages</h1>
  <div className="card1">
    <div className="html">
      <img src={html} alt="" />
      <p>HYPER MARKUP <br></br>LANGUAGE</p>
    </div>
    <div className="css">
      <img src={css} alt="" />
      <p>CASCADING STYLE <br></br>SHEETS</p>
    </div>
    <div className="javascript">
      <img src={js}  alt="" />
      <p>JAVASCRIPT</p>
    </div>
    <div className="php">
      <img src={php} alt="" />
      <p>HYPERTEXT <br></br>PREPROCESSOR</p>
    </div>
  </div>
  <div className="frameworks">
    <h1>Frameworks</h1>
    <div className="card2">
      <div className="react">
      <img src={react} alt="" />
      <p>REACT / REACT NATIVE</p>
    </div>
    <div className="tailwind">
      <img src={tailwind} alt="" />
      <p>TAILWIND CSS</p>
    </div>
    <div className="express">
      <img src={express} alt="" />
      <p>EXPRESS JS</p>
    </div>
    </div>
  </div>
</div>
      </section>

      <section id="educational">
        <h1>Educational</h1>
        <p>Education details</p>

        <div className="card3">
          <div className="wrap1">
            <div className="cctc">
            <img src={cctc} alt="" />
            <p>Consolatrix College of Toledo City 2021-2025</p>
            <p className="line">Bachelor of Science in Information Technology</p>
          </div> 
            <div className="ctu">
            <img src={ctu} alt="" />
            <p>Cebu Technological University 2020-2021</p>
            <p className="line">Bachelor in Industrial Computer Technology</p>
          </div> 
          </div>
          <div className="wrap2">
            <div className="matabang">
            <img src={matabang} alt="" />
            <p>Matab-ang Elementary School 2010-2014</p>
          </div>
          <div className="tnvs">
            <img src={tnvs} alt="" />
            <p>Toledo National Vocational School 2014-2020</p>
          </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section" style={{textAlign: "center"}}>
        <h1>Skills</h1><br></br>
        <p><strong>Technical Skills</strong><br></br>
Web Development (HTML, CSS, PHP, JavaScript)
Frameworks - React JS - Vite , Tailwind Css
Database Management (Mysql,SQL Server, Firebase)
Graphic Design (Canva, Figma, Wordpress)
Microsoft Office Suite (Word,Excel, Powerpoint)
Computer Hardware & Software Troubleshooting
Basic Networking , Video Editing (Capcut, Filmora and basic Adobe)</p><br></br>

<p><strong>Soft Skills</strong><br></br>
Strong Attention Detail
Problem-Solving and Critical Thinking
Adatability and Willingness to Learn
Time Management and Organization
Effective Communication</p>
      </section>
    </>
  );
}
