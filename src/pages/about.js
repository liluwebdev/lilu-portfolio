import {React, useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "aos/dist/aos.css";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import '../styles/main.scss';
import '../styles/about.scss';


const getImage = (imagePath) => {
  try {
    return require(`../assets/img/${imagePath}`);
  } catch (error) {
    console.error("Image not found:", imagePath);
    return "";
  }
};


function About() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <main className="about-page main">
      {/* Hero Slideshow */}
      <section className="about-hero">
            <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="about-slider"
      >
                {/* Slide 1: Professional About Me */}
          <SwiperSlide>
            <div className="hero-slide">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={12} className="hero-text" data-aos="fade-up">
                    <h1>About Me</h1>
                    <p>I integrate technology and art to create engaging learning experiences for students and educators.</p>
                    <Button variant="primary" href="/curriculum">
                      Explore My Work
                    </Button>
                  </Col>
                  <Col lg={6} md={12} className="hero-image" data-aos="fade-left">
                    <img src={getImage("lindsu_portrait.jpg")} alt="Creative Technology Educator" />
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>

          {/* Slide 2: Skills */}
          <SwiperSlide>
            <div className="hero-slide">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={12} className="hero-text" data-aos="fade-up">
                    <h1>Skills & Expertise</h1>
                    <p>From coding to design, I bring creative and technical skills together to innovate.</p>
                  </Col>
                  <Col lg={6} md={12} className="hero-image" data-aos="fade-left">
                    <img src="/assets/img/about-slide2.jpg" alt="Skills Showcase" />
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>

          {/* Slide 3: Resume */}
          <SwiperSlide>
            <div className="hero-slide">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={12} className="hero-text" data-aos="fade-up">
                    <h1>View My Resume</h1>
                    <p>Interested in my work experience and projects? Download my resume to learn more.</p>
                    <Button variant="primary" href="/assets/resume.pdf" download>
                      Download Resume
                    </Button>
                  </Col>
                  <Col lg={6} md={12} className="hero-image" data-aos="fade-left">
                    <img src="/assets/img/about-slide3.jpg" alt="Resume Preview" />
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>

          {/* Slide 4: Personal About Me */}
          <SwiperSlide>
            <div className="hero-slide">
              <Container>
                <Row className="align-items-center">
                  <Col lg={6} md={12} className="hero-text">
                    <h1>A Little About Me</h1>
                    <p>I'm a designer, educator, and lifelong learner. When I'm not teaching or creating, I enjoy exploring new technologies, gaming, and storytelling.</p>
                  </Col>
                  <Col lg={6} md={12} className="hero-image">
                    <img src="/assets/img/about-slide4.jpg" alt="Personal About Me" />
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
};

export default About;
