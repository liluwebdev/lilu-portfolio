import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/curriculum.scss"; 
import "../../styles/main.scss";
const getImage = (imagePath) => {
    try {
      return require(`../../assets/curriculum/${imagePath}`);
    } catch (error) {
      console.error("Image not found:", imagePath);
      return "";
    }
  };

function CurriculumDetails() {
 useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <main className="main">
      {/* Page Title */}
      <div
        className="page-title dark-background"
      >
        <Container className="position-relative">
          <h1>Curriculum: Digital Art & Design</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Curriculum Details</li>
            </ol>
          </nav>
        </Container>
      </div>
      <section className="curriculum-overview section">
  <Container>
    <Row className="align-items-start" data-aos="fade-up">
      {/* Column 1 (2/3 width): Overview */}
      <Col lg={8} md={12} className="curriculum-content">
        <h2>Overview</h2>
        <p>This unit focuses on digital illustration and composition. Students will learn:</p>
        <ul>
          <li>Understanding digital brushes and layers</li>
          <li>Creating a structured workflow for illustrations</li>
          <li>Exploring color theory in digital painting</li>
        </ul>
      </Col>

      {/* Column 2 (1/3 width): Focus Art & Materials with Image */}
      <Col lg={4} md={12} className="focus-art">
        <img 
          src={getImage("img/fieldwork_art_experience_torrance.jpg")}
          alt="Focus Art Thumbnail" 
          className="focus-art-image"
        />
        <h2>Focus Art & Materials</h2>
        <ul>
          <li><strong>Software:</strong> Photoshop, Procreate, Krita</li>
          <li><strong>Hardware:</strong> Drawing tablet or iPad with stylus</li>
          <li><strong>Traditional Materials:</strong> Sketchbook for initial sketches</li>
        </ul>
      </Col>
    </Row>
  </Container>
</section>


      {/* Accordion Menu for Curriculum Sections */}
      <section className="curriculum-accordion section">
        <Container data-aos="fade-up">
          <h2 className="text-center">Curriculum Breakdown</h2>

          <Accordion defaultActiveKey="0">
            {/* Unit 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Unit 1: Digital Illustration Basics</Accordion.Header>
              <Accordion.Body>
                <p>Introduction to digital tools, understanding layers, and basic brush techniques.</p>
                <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Download Guide
                </Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* Unit 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Unit 2: Composition & Storytelling</Accordion.Header>
              <Accordion.Body>
                <p>Learn how to build strong compositions and communicate stories visually.</p>
                <Button variant="primary" href="/downloads/unit2-resources.pdf" download>
                  Download Resources
                </Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* 🌈 Unit 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Unit 3: Advanced Color Theory</Accordion.Header>
              <Accordion.Body>
                <p>Understanding color psychology, palettes, and digital blending techniques.</p>
                <Button variant="primary" href="/downloads/unit3-color-theory.pdf" download>
                  Download Color Guide
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </main>
  );
};

export default CurriculumDetails;
