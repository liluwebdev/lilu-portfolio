import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {  Row, Col, Button, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Form.scss";
import Form from "../components/Form";

function Contact() {
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
          <h1>Contact Me</h1>
       
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Contact Me</li>
            </ol>
          </nav>
        </Container>
      </div>
      {/* End Page Title */}

     {/* Contact Section */}
           <section id="contact" className="section light-background">
             <Container data-aos="fade-up">
             </Container>
             <Container>
              <Row>
                <Col className="contact"> 
                <Form />
                </Col>
                <Col>
               <h4 data-aos="fade-up" data-aos-delay="200">Let's Work Together</h4>
               <p data-aos="fade-up" data-aos-delay="300">
               Interested in working together on curriculum, workshops, or educational projects? Whether you're a school, educator, 
               or parent looking for support, I'm here to help! Drop me a message using the form below, or check out my resume for 
               more about my experience. Let's create something inspiring!
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