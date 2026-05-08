import {React, useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
    return new URL(`../assets/img/${imagePath}`, import.meta.url);
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
    <main className="about-page main dark-background">
      {/* Hero Slideshow */}
      <section className="about-hero section">
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
                    <h1>Who I am</h1>
                    <p>I'm Lindsey Ussery—an educator, artist, and creative technologist passionate about making digital art and 
                      technology accessible to all. With a background in art education, web design, and curriculum development, 
                      I bridge the gap between creativity and technology, helping students, educators, and parents navigate 
                      the digital world with confidence.</p>
                      <div className="button-group" data-aos="fade-up" data-aos-delay="400">
                    <Button variant="primary" href="/curricula">
                      Explore my Curricula
                    </Button>
                    <Button variant="primary" href="/portfolio/design">
                      Explore my Design
                    </Button>
                    </div>
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
                    <h1>My Experience</h1>
                    <p>With a BFA in Art Education and an AA in Web Design and New Media, 
                      I've spent years designing STEAM-focused curricula, teaching creative coding, game design, 
                      and digital media. I've worked with schools, educators, and parents to develop engaging 
                      technology-driven learning experiences. I also received the Disability Inclusion 
                      in Art Education Award for my work in accessible learning</p>
                  </Col>
                  <Col lg={6} md={12} className="hero-image" data-aos="fade-left">
                    <img src={getImage("about_me_paris_lindsu.jpg")} alt="Skills Showcase" />
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
                    <h1>My Teaching Philosophy</h1>
                    <p>I believe that technology is a tool for creativity, not just consumption. 
                      My teaching approach focuses on project-based learning, problem-solving, and inclusivity, 
                      ensuring that students can explore, experiment, and build confidence in both art and technology. 
                      Whether in coding, digital art, or game design, my goal is to empower students 
                      and educators to think creatively and critically.</p>
                    <Button variant="primary" href="/education/">
                    Learn More About My Educational Philosophy
                    </Button>
                  </Col>
                  <Col lg={6} md={12} className="hero-image" data-aos="fade-left">
                    <img src={getImage("about_me_italy_lindsu.jpg")}  alt="Resume Preview" />
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
                    <h1>Beyond Teaching</h1>
                    <p>When I'm not teaching or creating, I'm a passionate gamer, storyteller, and music lover. 
                      I spend time playing video games like Red Dead Redemption 2, Animal Crossing, and Final Fantasy, attending music festivals, 
                      and running tabletop RPG campaigns. I also love spending time with my three kids, two dogs, and two cats, who inspire my creativity every day.</p>
                  </Col>
                  <Col lg={6} md={12} className="hero-image">
                    <img src={getImage("about_me_husband_lindsu.jpg")}  alt="Personal About Me" />
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
