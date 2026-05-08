import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";
import CurriculaShowcase from "../components/curricula-details";  


function Curricula() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title dark-background">
        <Container className="position-relative">
          <h1>Curricula</h1>
          <p>
          Education is at the heart of what I do. I develop curricula that bridge technology, 
          creativity, and hands-on learning, helping students and educators engage with subjects 
          in meaningful ways. From coding and game design to digital literacy, my lesson plans 
          are designed to be accessible, innovative, and impactful.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Curricula</li>
            </ol>
          </nav>
        </Container>
      </div>
      {/* End Page Title */}

            {/* This is where CurriculatShowcase is rendered */}
            <section id="project-showcase" className="project-showcase section">
        <Container data-aos="fade-up">
          <CurriculaShowcase />
        </Container>
      </section>
    </main>
  );
};
  
  export default Curricula;