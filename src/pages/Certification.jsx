import cert from '../assets/images/cert1.jpg';
import "../pages/cert.css";
import certone from '../assets/images/cert2.png';
import learn from '../assets/images/csslearn.png';
import certthree from '../assets/images/cert3.png';

export default function Educational() {
  const certifications = [
    {
      id: 1,
      title: "Professional Certification",
      image: cert,
      category: "Professional Development",
      description: "Industry-recognized certification validating professional expertise"
    },
    {
      id: 2,
      title: "Technical Certification",
      image: certone,
      category: "Technical Skills",
      description: "Advanced technical certification demonstrating specialized knowledge"
    },
    {
      id: 3,
      title: "CSS Mastery",
      image: learn,
      category: "Web Development",
      description: "Comprehensive CSS certification covering modern styling techniques"
    },
    {
      id: 4,
      title: "Advanced Certification",
      image: certthree,
      category: "Professional Development",
      description: "Advanced level certification showcasing expertise and commitment"
    }
  ];

  return (
    <section className='cert-section'>
      <div className='cert-header'>
        <h1 className='cert-title'>My Certifications</h1>
        <p className='cert-subtitle'>Professional certifications that validate my skills and expertise</p>
      </div>
      
      <div className='cert-container'>
        {certifications.map((cert) => (
          <div key={cert.id} className='cert-card'>
            <div className='cert-image-container'>
              <img src={cert.image} alt={cert.title} className='cert-image' />
              <div className='cert-overlay'>
                <span className='cert-category'>{cert.category}</span>
              </div>
            </div>
            <div className='cert-content'>
              <h3 className='cert-name'>{cert.title}</h3>
              <p className='cert-description'>{cert.description}</p>
              <button className='cert-view-btn' onClick={() => window.open(cert.image, '_blank')}>
                View Certificate
                <svg className='btn-icon' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                  <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                  <circle cx='12' cy='12' r='3'></circle>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
