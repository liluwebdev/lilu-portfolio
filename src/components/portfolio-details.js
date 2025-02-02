import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/portfoliodetails.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faFigma, faAws, faSass, faPhp } from "@fortawesome/free-brands-svg-icons"; 
import developmentProjects from "../data/developmentdetails.json";

const getFontAwesomeIcon = (iconName) => {
    switch (iconName) {
      case "fa-react": return faReact;
      case "fa-figma": return faFigma;
      case "fa-aws": return faAws;
      case "fa-sass": return faSass;
      case "fa-php": return faPhp;
      default: return null;
    }
  };

  const getImage = (imagePath) => {
    try {
      return require(`../assets/portfolio/img/${imagePath}`);
    } catch (error) {
      console.error("Image not found:", imagePath);
      return "";
    }
  };

function ProjectShowcase() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="development-projects" className="development-projects section">

      {/* Project Cards */}
      <Container>
        <Row className="gy-5">
          {developmentProjects.map((project, index) => (
            <Col md={12} lg={12} key={index} data-aos="fade-up" className="px-5" data-aos-delay={`${100 * (index + 1)}` }>
              <Card className="development-card">
                <Row className="g-1">
                  {/* Project Image */}
                  <Col md={4} className="image-container">
                    <Card.Img variant="top" src= {getImage(project.image)} alt={project.title} />
                  </Col>
                 
                  {/* Project Info */}
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                     
                       {/*  Icon Section */}
                       <div className="icon-section">
                        {project.icons && project.icons.map((icon, idx) =>
                            icon.startsWith("fa-") ? (
                            <FontAwesomeIcon key={idx} icon={getFontAwesomeIcon(icon)} className="icon fa-icon" />
                            ) : (
                            <i key={idx} className={`bi ${icon} icon bi-icon`}></i>
                            )
                        )}
                        </div>
                      
                      <div className="button-group">
                        <Button variant="primary" href={project.website} target="_blank">
                          View Website
                        </Button>
                        <Button variant="secondary" href={project.github} target="_blank">
                          GitHub Repo
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

export default ProjectShowcase;


