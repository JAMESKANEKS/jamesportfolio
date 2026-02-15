import "../pages/Project.css";
import memoria from "../assets/images/memoria.png";
import paint from "../assets/images/paint.png";
import diagnostic from "../assets/images/diagnostic.png";
import rental from "../assets/images/north8.png";

export default function Educational() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">A showcase of my recent work and client projects</p>
      </div>
      
      <div className="projects-container">
        <div className="project-category">
          <h2 className="category-title">Featured Project</h2>
          <div className="project-card featured">
            <div className="project-image-container">
              <img src={memoria} alt="Memoria Project" className="project-image" />
              <div className="project-overlay">
                <span className="project-badge">Capstone</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Memoria</h3>
              <p className="project-description">A Digital Web-based YearBook platform for preserving memories and connections</p>
              <div className="project-tech">
                <span className="tech-tag">Web App</span>
                <span className="tech-tag">Full Stack</span>
              </div>
              <a href="https://memoria-iyf7.onrender.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
                <svg className="link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15,3 21,3 21,9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="project-category">
          <h2 className="category-title">Client Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image-container">
                <img src={rental} alt="Rental Project" className="project-image" />
                <div className="project-overlay">
                  <span className="project-badge">Client</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">North8 Cebu</h3>
                <p className="project-description">Rental Website with integrated Blog and Business management system</p>
                <div className="project-tech">
                  <span className="tech-tag">Business</span>
                  <span className="tech-tag">CMS</span>
                </div>
                <a href="https://north8cebu.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                  <svg className="link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-container">
                <img src={diagnostic} alt="Diagnostic Project" className="project-image" />
                <div className="project-overlay">
                  <span className="project-badge">Client</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Toledo Doctors</h3>
                <p className="project-description">Diagnostic System with POS and comprehensive Service Management</p>
                <div className="project-tech">
                  <span className="tech-tag">Healthcare</span>
                  <span className="tech-tag">POS</span>
                </div>
                <a href="https://toledo-doctors.vercel.app/login" className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                  <svg className="link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-container">
                <img src={paint} alt="Paint Project" className="project-image" />
                <div className="project-overlay">
                  <span className="project-badge">Client</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Paint Inventory</h3>
                <p className="project-description">POS system with advanced Inventory Management for paint business</p>
                <div className="project-tech">
                  <span className="tech-tag">Inventory</span>
                  <span className="tech-tag">POS</span>
                </div>
                <a href="https://boypaintinventory.vercel.app/login" className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                  <svg className="link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
