import "../pages/Project.css";
import memoria from "../assets/images/memoria.png";
import paint from "../assets/images/paint.png";
import diagnostic from "../assets/images/diagnostic.png";
import rental from "../assets/images/north8.png";

export default function Educational() {
  return (
    <section className="home">
      <h1>My Projects</h1>
      <div className="container-project">
        <p style={{ marginRight: "20px"}}><strong>Our Capstone Project</strong></p>
        <div className="project1">
          <div className="p1c">
            <img src={memoria} alt="Memoria Project" />
          <p>Memoria - A Digital Web based YearBook platform</p>
          <a href="https://memoria-iyf7.onrender.com/">View This Project</a>
          </div>
        </div>
       
        <div className="project2">
           <p><strong>My Clients Project</strong></p>
          <div className="p1">
            <img src={rental} alt="Rental Project" />
            <p>Rental Website - Blog Website Business</p>
            <a href="https://north8cebu.com/">View This Project</a>
          </div>
          
          <div className="p2">
            <img src={diagnostic} alt="Diagnostic Project" />
            <p>Diagnostic System - Pos with Service Management</p>
            <a href="https://toledo-doctors.vercel.app/login">View This Project</a>
          </div>
          <div className="p3">
            <img src={paint} alt="Paint Project" />
          <p>Paint Inventory - Pos with Inventory Management</p>
          <a href="https://boypaintinventory.vercel.app/login">View This Project</a>
        </div>
        </div>  
      </div>
    </section>
  );
}
