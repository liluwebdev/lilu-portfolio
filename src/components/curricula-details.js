import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/curriculumdetails.scss';
import CurriculaProjects from "../data/curricula-projects.json";

const getImage = (imagePath) => {
    try {
      return require(`../assets/curriculum/img/${imagePath}`);
    } catch (error) {
      console.error("Image not found:", imagePath);
      return "";
    }
  };

function CurriculaShowcase() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="development-projects section">

      {/* Project Cards */}
      <Container>
        <Row className="gy-5">
          {CurriculaProjects.map((project, index) => (
            <Col md={12} lg={12} key={index} data-aos="fade-up" className="px-5" data-aos-delay={`${100 * (index + 1)}` }>
              <Card className="development-card">
                <Row className="g-1">
                  {/* Project Image */}
                  <Col md={4} className="image-container">
                    <Card.Img variant="top" src={getImage(project.image)} alt={project.title} />
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
