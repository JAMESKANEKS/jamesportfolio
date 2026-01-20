import cert from '../assets/images/cert1.jpg';
import "../pages/cert.css";
import certone from '../assets/images/cert2.png';
import learn from '../assets/images/csslearn.png';
import certthree from '../assets/images/cert3.png';

export default function Educational() {
  return (
    <section className='cert-section'>
      <h1>My Certifications</h1>
      <img src={cert} alt="Certification" />
      <img src={certone} alt="Certification 2" />
      <img src={learn} alt="Learn CSS" />
      <img src={certthree} alt="Certification 3" />
    </section>
  );
}
