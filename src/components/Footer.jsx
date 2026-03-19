import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3 className="footer-title">James Francis E. Rodriguez</h3>
            <p className="footer-description">
              Web & App Developer
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#educational">Educational</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <EnvelopeIcon className="contact-icon" />
                <span>jamesfrancisrodriguezz
                  @gmail.com</span>
              </div>
              <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                <span>09366253640 / 09272737470</span>
              </div>
              <div className="contact-item">
                <MapPinIcon className="contact-icon" />
                <span>Toledo City Cebu Philippines</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 James francis E. Rodriguez. All rights reserved.</p>
          <p>Built with using React & Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
}
