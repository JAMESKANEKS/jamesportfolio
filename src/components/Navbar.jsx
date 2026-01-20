import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../assets/images/facebook (1).png";
import insta from "../assets/images/instagram.png";
import github from "../assets/images/github-sign.png";
import linkedin from "../assets/images/linkedin.png";
import logo1 from "../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);

  // ✅ HEADER SCROLL EFFECT
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ SECTION NAVIGATION
  const goToSection = (id) => {
    setOpen(false);
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo1} alt="logo" />
      </div>

      {/* Mobile menu button */}
      <button 
        className="mobile-menu-btn" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </button>

      <div className={`nav-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav" ref={menuRef}>
          <button onClick={() => goToSection("home")}>Home</button>
          <button onClick={() => goToSection("about")}>About Me</button>
          <button onClick={() => goToSection("educational")}>
            Educational Background
          </button>
          <button onClick={() => goToSection("skills")}>Technical Skills</button>

          <div className="dropdown">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
              aria-expanded={open}
              aria-haspopup="true"
            >
              More {open ? '▴' : '▾'}
            </button>

            <div className={`dropdown-menu ${open ? 'open' : ''}`}>
              <NavLink to="/project" onClick={() => setOpen(false)}>Projects & Trainings</NavLink>
              <NavLink to="/internship" onClick={() => setOpen(false)}>OJT / Internship</NavLink>
              <NavLink to="/certification" onClick={() => setOpen(false)}>Certifications & Trainings</NavLink>
              <NavLink to="/reflection" onClick={() => setOpen(false)}>Reflection / Learning Journey</NavLink>
              <NavLink to="/resume" onClick={() => setOpen(false)}>Resume & Contact</NavLink>
              <NavLink to="/declaration" onClick={() => setOpen(false)}>Declaration & Ethics</NavLink>
            </div>
          </div>
        </div>

        <div className="social">
          <a href="#" aria-label="Facebook"><img src={logo} alt="facebook" /></a>
          <a href="#" aria-label="Instagram"><img src={insta} alt="instagram" /></a>
          <a href="https://github.com/JAMESKANEKS" aria-label="GitHub"><img src={github} alt="github" /></a>
          <a href="#" aria-label="LinkedIn"><img src={linkedin} alt="linkedin" /></a>
        </div>
      </div>
    </nav>
  );
}
