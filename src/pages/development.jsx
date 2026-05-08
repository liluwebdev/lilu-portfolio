import React from "react";
import { Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.css";
import ProjectShowcase from "../components/portfolio-details";  
import "../styles/portfolio.scss";


function Development() {
  
  return (
    <main className="main">
      {/* Page Title */}
      <div
        className="page-title dark-background"
        
      >
        <Container className="position-relative">
          <h1>Portfolio: Development </h1>
          <p> I build interactive and dynamic digital experiences. With expertise in front-end 
            and full-stack development, I create websites, applications, and creative coding 
            projects that merge functionality with engaging design. From intuitive user interfaces 
            to performance-driven code, my work brings ideas to life through technology.</p>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li className="current">Development</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Project Showcase Section */}
      <section id="project-showcase" className="project-showcase section">
        <Container data-aos="fade-up">
          <ProjectShowcase />
        </Container>
      </section>

    </main>
  );
}

export default Development;
