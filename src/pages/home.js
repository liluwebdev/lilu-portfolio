import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../styles/main.scss';
import '../styles/home.scss';
import herobg from "../assets/img/theflowergarden2023-small.jpg"; 
import projects from "../data/projects.json"; 
import aboutIcons from "../data/about-icons.json"; 

// Import Font Awesome only for the React icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Home() { 
     
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const lightbox = GLightbox({ touchNavigation: true, loop: true });
    return () => lightbox.destroy();
  }, []);

  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img src={herobg} alt="flower art by lindsey ussery" data-aos="fade-in" />

        <Container className="d-flex flex-column align-items-center text-left">
          <h2 data-aos="fade-up" data-aos-delay="100">Artist who thrives in Develoment & Design</h2>
          <h3 data-aos="fade-up" data-aos-delay="150">
          Hi, I'm Lindsey Ussery—a designer, developer, and educator passionate about inspiring creativity through technology.


          </h3>
          <p data-aos="fade-up" data-aos-delay="200">
          With over a decade of experience in design and development, and a deep commitment to teaching, 
          I specialize in crafting engaging digital experiences and empowering others to master the art of technology. 
          From building innovative websites to designing curricula that bring STEAM to life, 
          I'm dedicated to bridging the gap between creativity and technology.
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
            <a
              href="https://player.vimeo.com/video/205809295"
              className="glightbox pulsating-play-btn"
            ></a>
          </div>
        </Container>
      </section>

      <section id="about" className="about section">
      <Container data-aos="fade-up">
        <h2>About</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </Container>

      <Container>
        <Row className="gy-4">
          <Col lg={6} data-aos="fade-up" data-aos-delay="100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                <i className="bi bi-check2-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
            </ul>
          </Col>

          <Col lg={6} data-aos="fade-up" data-aos-delay="200">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <Link to="/about" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </Col>
        </Row>
      </Container>


 <Container className="icon-row" data-aos="fade-up" data-aos-delay="300">
          <Row className="align-items-center justify-content-start">
            {aboutIcons.map((icon, index) => (
             <Col key={index} xs="auto" sm="auto" md="auto" lg="auto" className="text-center icon-item">
                <div className="icon-wrapper">
                  {/* Render Font Awesome or Bootstrap Icons Based on Type */}
                  {icon.type === "bi" ? (
                    <i className={`bi ${icon.icon} icon-small`}></i> // Bootstrap Icon
                  ) : (
                    <FontAwesomeIcon icon={faReact} className="icon-small" /> // Font Awesome React Icon
                  )}
                </div>
                <p className="icon-label">{icon.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="services section">
        <Container data-aos="fade-up">
          <h2>Projects</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </Container>
        <Container>
          <Row className="gy-4">
            {projects.map((service, index) => (
              <Col lg={6} md={12} key={index} data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className={`bi bi-${service.icon}`}></i>
                  </div>
                  <Link to={service.link} className="stretched-link">
                    <h3>{service.title}</h3>
                  </Link>
                  <p>{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
  

      {/* Contact Section */}
      <section id="contact" className="contact section light-background">
        <Container data-aos="fade-up">
          <h2>Contact</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </Container>

        <Container>
          <form action="#" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
            <Row className="gy-4">
              <Col md={6}>
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </Col>
              <Col md={6}>
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </Col>
              <Col md={12}>
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </Col>
              <Col md={12}>
                <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
              </Col>
              <Col md={12} className="text-center">
                <Button variant="primary" type="submit">Send Message</Button>
              </Col>
            </Row>
          </form>
        </Container>
      </section>
    </main>
  );
};

  
  export default Home;