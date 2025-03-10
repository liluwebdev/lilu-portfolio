import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {  Row, Col, Button, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Form.scss";
import Form from "../components/Form";
import herobg from "../assets/img/theflowergarden2023-small.jpg"; 

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main">
     {/* Contact Section */}
     <section id="hero" className="hero section dark-background">
        <img src={herobg} alt="flower art by lindsey ussery" data-aos="fade-in" />

        <Container>
              <Row>
                <Col className="contact" data-aos="fade-up" data-aos-delay="400"> 
                <Form />
                </Col>
                <Col>
               <h3 data-aos="fade-up" data-aos-delay="200">Let's Work Together</h3>
               <p data-aos="fade-up" data-aos-delay="300">
               Interested in working together on curriculum, workshops, or educational projects? Whether you're a school, educator, 
               or parent looking for support, I'm here to help! Drop me a message using the form below, or check out my resume for 
               more about my experience. Let's create something inspiring!
          </p>
          
        <hr></hr>
        <p data-aos="fade-up" data-aos-delay="300">
              Currently looking for work in:
              <ul><li>Redondo Beach/Los Angeles, CA</li> 
              <li>Austin/San Antonio, Texas </li>
              <li>Remote</li>
              </ul>
          </p>
          <div className="button-group" data-aos="fade-up" data-aos-delay="400">
         <Button variant="secondary" href="/download/lilu-dev-resume-2025.pdf" download>
                                   My Web Developer Resume
                                 </Button> 
        <Button variant="secondary" href="/download/lilu-education-resume-2025.pdf" download>
                                   My Education Resume
                                 </Button>
                                 </div>
                </Col>
                </Row>
              </Container>
          

           </section>
    </main>
  );
};
  
  export default Contact;