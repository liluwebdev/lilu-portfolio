import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import portfolioData from "../data/artportfolio.json";
import ProjectShowcase from "../components/portfolio-details";  
import "../styles/portfolio.scss";

const getImage = (imagePath) => {
  try {
    return require(`../assets/portfolio/img/${imagePath}`);
  } catch (error) {
    console.error("Image not found:", imagePath);
    return "";
  }
};

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("*");
  const isotopeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const lightbox = GLightbox({ touchNavigation: true, loop: true });

    imagesLoaded(containerRef.current, () => {
      const iso = new Isotope(containerRef.current, {
        itemSelector: ".portfolio-item",
        layoutMode: "masonry",
        percentPosition: true,
        transitionDuration: "0.5s",
      });

      isotopeRef.current = iso;
      iso.layout();
    });

    return () => {
      lightbox.destroy();
      if (isotopeRef.current) isotopeRef.current.destroy();
    };
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (isotopeRef.current) {
      isotopeRef.current.arrange({
        filter: filter === "*" ? "*" : `.${filter}`,
      });
    }
  };

  return (
    <main className="main">
      {/* Page Title */}
      <div
        className="page-title dark-background"
        data-aos="fade"
        
      >
        <Container className="position-relative">
          <h1>Portfolio: Development & Design</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Portfolio</li>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        <Container className="section-title" data-aos="fade-up">
          <h2>Graphic Design & Traditional Art</h2>
          <p>Explore some of my work in art and design.</p>
        </Container>

        {/* Portfolio Filters */}
        <Container>
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            {["*", "filter-painting", "filter-illustration", "filter-branding", "filter-graphic-design"].map((filter, index) => (
              <li
                key={index}
                className={activeFilter === filter ? "filter-active" : ""}
                onClick={() => handleFilterChange(filter)}
                style={{ cursor: "pointer" }}
              >
                {filter === "*" ? "All" : filter.replace("filter-", "").toUpperCase()}
              </li>
            ))}
          </ul>

          {/* Portfolio Items */}
                    <Row ref={containerRef} className="gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                      {portfolioData.map((item, index) => (
              <Col lg={4} md={6} key={index} className={`portfolio-item isotope-item ${item.category}`}>
                {/* Clickable image for Glightbox */}
                <a href={getImage(item.image)} className="glightbox">
                  <img src={getImage(item.image)} className="img-fluid" alt={item.title} />
                </a>

                {/* Overlay Info */}
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>

                  {/* Action Links */}
                  <div className="portfolio-links">
                    {/* Zoom Icon (Glightbox) */}
                    <a href={getImage(item.image)} className="glightbox preview-link" title={item.title}>
                      <i className="bi bi-zoom-in"></i>
                    </a>

                    {/* Details Link */}
                    <Link to={item.detailsLink} className="details-link" title="More Details">
                      <i className="bi bi-link-45deg"></i>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Portfolio;
