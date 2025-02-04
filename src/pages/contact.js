import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {  Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

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
          <h1>Starter Page</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Starter Page</li>
            </ol>
          </nav>
        </Container>
      </div>
      {/* End Page Title */}

     {/* Contact Section */}
           <section id="contact" className="contact section light-background">
             <Container data-aos="fade-up">
               <h2>Contact</h2>
               <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
             </Container>
     
             <Container>
               <form action="#" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                 <Row className="gy-4">
                   <Col md={6}>
                     <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                   </Col>
                   <Col md={6}>
                     <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                   </Col>
                   <Col md={12}>
                     <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                   </Col>
                   <Col md={12}>
                     <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                   </Col>
                   <Col md={12} className="text-center">
                     <Button variant="primary" type="submit">Send Message</Button>
                   </Col>
                 </Row>
               </form>
             </Container>
           </section>
    </main>
  );
};
  
  export default Contact;