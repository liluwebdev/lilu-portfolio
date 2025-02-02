import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main">
      {/* Page Title */}
      <div
        className="page-title dark-background"
        data-aos="fade"
        style={{ backgroundImage: "url(/assets/img/page-title-bg.webp)" }}
      >
        <Container className="position-relative">
          <h1>Starter Page</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Starter Page</li>
            </ol>
          </nav>
        </Container>
      </div>
      {/* End Page Title */}

      {/* Starter Section */}
      <section id="starter-section" className="starter-section section">
        <Container data-aos="fade-up">
          <p>Use this page as a starter for your own custom pages.</p>
        </Container>
      </section>
      {/* End Starter Section */}
    </main>
  );
};
  
  export default Contact;