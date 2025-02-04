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
          
        </Container>
      </section> 

    </main>
  );
};

  
  export default Home;