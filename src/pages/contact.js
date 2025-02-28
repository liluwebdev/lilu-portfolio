import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {  Row, Col, Button, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "../components/Form";
import "../styles/Form.scss";

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
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.
          </p>
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
               <h4>Other Ways to Say Hello</h4>

                </Col>
                </Row>
              </Container>
           </section>
    </main>
  );
};
  
  export default Contact;