import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/portfoliodetails.scss';
import CurriculaProjects from "../data/curricula-projects.json";

function CurriculaShowcase() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="development-projects" className="development-projects section">
      {/* Section Title */}
      <Container className="section-title" data-aos="fade-up">
        <h2>Curricula Projects</h2>
        <p>Here are some of my web development projects.</p>
      </Container>

      {/* Project Cards */}
      <Container>
        <Row className="gy-5">
          {CurriculaProjects.map((project, index) => (
            <Col md={12} lg={12} key={index} data-aos="fade-up" className="px-5" data-aos-delay={`${100 * (index + 1)}` }>
              <Card className="development-card">
                <Row className="g-1">
                  {/* Project Image */}
                  <Col md={4} className="image-container">
                    <Card.Img variant="top" src={project.image} alt={project.title} />
                  </Col>

                  {/* Project Info */}
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                     
                      
                      <div className="button-group">
                        <Button variant="primary" href={project.website} target="_blank">
                          View Curriculum
                        </Button>
                        <Button variant="secondary" href={project.download} target="_blank">
                          Download PDF
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CurriculaShowcase;
