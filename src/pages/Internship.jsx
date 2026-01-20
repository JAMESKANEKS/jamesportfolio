import cebeco from '../assets/images/cebeco.jpg';
import "../pages/Internship.css";
import imgone from '../assets/images/img1.jpg';
import imgtwo from '../assets/images/img2.jpg';

export default function Educational() {
  return (
    <section>
      <h1>Internship Details</h1>
      <img className="cebeco" src={cebeco} alt="Cebeco Internship" />
      <h3>Cebu III Electric Cooperative Inc.</h3>
      <p>Internship Duration: July 2026 - September 2026 <strong>480 hours</strong></p>
      <p>
        During my internship at Cebu III Electric Cooperative Inc., I had the opportunity to work on several projects that enhanced my technical skills and provided valuable industry experience.
      </p>
      <div className="images">
        <img src={imgone} alt="" />
        <img src={imgtwo} alt="" />
      </div>
    </section>
  );
}
