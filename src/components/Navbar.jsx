import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
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

  // ✅ SCROLL TO TOP ON PAGE NAVIGATION
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        setOpen(false); // Also close dropdown when switching to desktop
        // Force re-render of navigation
        const navContainer = document.querySelector('.nav-container');
        if (navContainer) {
          navContainer.classList.remove('mobile-open');
        }
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
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="logo">
        <motion.img 
          src={logo1} 
          alt="logo" 
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>

      {/* Mobile menu button */}
      <motion.button 
        className="mobile-menu-btn" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        <motion.div 
          className={`nav-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}
          initial={false}
          animate={{
            x: isMobileMenuOpen ? 0 : window.innerWidth <= 768 ? "100%" : 0,
            opacity: isMobileMenuOpen || window.innerWidth > 768 ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="nav" ref={menuRef}>
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Me" },
              { id: "educational", label: "Educational Background" },
              { id: "skills", label: "Technical Skills" }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => goToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, color: "#3b82f6" }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}

            <div className="dropdown">
              <motion.button 
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Dropdown clicked, current state:', open);
                  setOpen(!open);
                }}
                aria-expanded={open}
                aria-haspopup="true"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p style={{ textAlign: "center", width: "100%"}}>More</p>
                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-4 h-4 inline-block ml-1" />
                </motion.div>
              </motion.button>

              <div className={`dropdown-menu ${open ? 'open' : ''}`}>
                {[
                  { to: "/project", label: "My Projects" },
                  { to: "/internship", label: "OJT / Internship" },
                  { to: "/certification", label: "Certifications & Trainings" },
                  { to: "/reflection", label: "Reflection / Learning Journey" },
                  { to: "/resume", label: "Resume & Contact" },
                  { to: "/declaration", label: "Declaration & Ethics" }
                ].map((item, index) => (
                  <NavLink 
                    key={item.to}
                    to={item.to} 
                    onClick={() => {
                      console.log('Dropdown item clicked:', item.label);
                      setOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className={({ isActive }) => isActive ? "active" : ""}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className="social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { href: "https://www.facebook.com/jarancisf.rodriguez/", src: logo, alt: "facebook" },
              { href: "https://www.instagram.com/kanekiroshiguez/", src: insta, alt: "instagram" },
              { href: "https://github.com/JAMESKANEKS", src: github, alt: "github" },
              { href: "https://www.linkedin.com/in/jamesf-rodriguez/", src: linkedin, alt: "linkedin" }
            ].map((social, index) => (
              <motion.a
                key={social.alt}
                href={social.href}
                aria-label={social.alt.charAt(0).toUpperCase() + social.alt.slice(1)}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <img src={social.src} alt={social.alt} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.nav>
  );
}
