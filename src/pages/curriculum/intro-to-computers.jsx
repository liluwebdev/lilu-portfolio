import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/curriculum.scss"; 
import "../../styles/main.scss";
const getImage = (imagePath) => {
    try {
      return new URL(`../../assets/curriculum/img/${imagePath}`, import.meta.url);
    } catch (error) {
      console.error("Image not found:", imagePath);
      return "";
    }
  };

function IntroToComputers() {
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
          <h1>Curriculum: Introduction to Computers</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
               <li><Link to="/curricula">Curricula</Link></li>
              <li className="current">Intro to Computers</li>
            </ol>
          </nav>
        </Container>
      </div>
      <section className="curriculum-overview section">
    <Container>
      <Row className="align-items-start" data-aos="fade-up">
        <Col lg={8} md={12} className="curriculum-content">
          <h2>Unit Overview: “Introduction to Computers”</h2>
          <p>
          In this unit, students will explore what makes a computer a computer and how these devices have shaped the world we live in. 
          They'll dive into the history of computing, meet key innovators, and discover how past inventions connect to the technology they use every day. 
          Through hands-on projects and creative presentations, students will share what they've learned, building skills in collaboration, critical thinking, 
          and digital literacy along the way. Its important to note that this unit is <strong>coding free</strong>; which means teachers can use this unit to 
          teach the concepts of coding and computers without everyone having access to a computer.</p>
          <h3>Time Frame:</h3>
          <ul>
            <li>Lesson One - Cultural/Historical Overview: 4, 50m sessions.</li>
            <li>Lesson Two - Input/Output Process: 1, 50m session.</li>
            <li>Lesson Three - Logic & Algorithm: 3, 50m sessions.</li>
            <li>Lesson Four - Understanding Data & Binary Code</li>
            <li>Lesson Five - Why Computers Matter</li>
          </ul>
          <h3>Learning Objectives</h3>
          <ul>
            <li>Gain knowledge about the history of computers and inventors.</li>
            <li>Learn what is inside a computer including the operating system and applications.</li>
            <li>Be introduced to computer programming languages and their purpose.</li>
            <li>Learn about the computers the students interact with everyday.</li>
          </ul>
          <h3>Vocabulary</h3>
          <ul>
            <li><strong>Computer</strong> – An electronic device that processes information by following instructions from hardware and software.</li>
            <li><strong>Hardware</strong> – The physical components of a computer that you can touch, like the CPU, keyboard, or monitor.</li>
            <li><strong>Software</strong> – A set of instructions that tells a computer what to do; includes applications and operating systems.</li>
            <li><strong>Input Device</strong> – A hardware component that sends information into a computer.</li>
            <li><strong>Output Device</strong> – A hardware component that displays or outputs information from a computer.</li>
            <li><strong>CPU (Central Processing Unit)</strong> – The “brain” of the computer that carries out instructions and performs calculations.</li>
            <li><strong>RAM (Random Access Memory)</strong> – The computer’s short-term memory that temporarily stores data while the computer is running.</li>
            <li><strong>Storage</strong> – A device that holds data permanently or semi-permanently.</li>
            <li><strong>Motherboard</strong> – The main circuit board that connects all computer components and allows them to communicate.</li>
            <li><strong>Power Supply</strong> – The hardware that provides power to the computer.</li>
            <li><strong>Operating System (OS)</strong> – Software that manages computer hardware and software resources.</li>
            <li><strong>Application (App)</strong> – A type of software designed to perform specific tasks.</li>
            <li><strong>Peripheral</strong> – External devices connected to a computer, like printers, scanners, or game controllers.</li>
            <li><strong>Cloud Storage</strong> – A way of storing files online instead of on your computer’s hard drive.</li>
            <li><strong>Network</strong> – A group of connected computers that share resources and information.</li>
            <li><strong>Algorithm</strong> – A step-by-step set of instructions for solving a problem or completing a task.</li>
            <li><strong>Binary Code</strong> – The language of computers, using only 1s and 0s to represent data.</li>
            <li><strong>Data</strong> – Information processed or stored by a computer.</li>
            <li><strong>Server</strong> – A computer that provides data and services to other computers over a network.</li>
            <li><strong>User Interface (UI)</strong> – The way a user interacts with a computer or software, often through buttons, menus, and icons.</li>
        </ul>
        <h3>California & National Computer Science Standards</h3>
        <p>This Lesson meets the following standards set by the state and board of education.</p>
        <p>6-8.CS.1, 6-8.CS.2, 6-8.IC.20, 6-8.IC.21, 6-8.AP.17, 6-8.AP.18, 6-8.AP.15, 6-8.AP.16</p>
        </Col>

      {/* Column 2 (1/3 width): Focus Art & Materials with Image */}
      <Col lg={4} md={12} className="focus-art">
        <h2>Materials</h2>
        <ul>
          <li><strong>Software:</strong> Access to Google Docs, Recording Software, Slideshows</li>
          <li><strong>Hardware:</strong> Computer with Internet</li>
          <li><strong>Written Materials:</strong> History Slideshow, Invention/Inventor Cards, Project Planning Sheets, Rubric for Student Reflections</li>
        </ul>
      </Col>
    </Row>
  </Container>
</section>


      {/* Accordion Menu for Curriculum Sections */}
      <section className="curriculum-accordion section">
        <Container data-aos="fade-up">
          <h2 className="text-center">Curriculum Breakdown</h2>

          <Accordion defaultActiveKey="0">
            {/* Unit 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Lesson 1: History of Computers</Accordion.Header>
              <Accordion.Body>
                <p>Students will define what a computer is, identify key hardware and software components, 
                  and understand the evolution of computers by exploring significant milestones in computing history.</p>
                  <h3>Learning Objectives</h3>
                    <ul>
                      <li>Gain knowledge about the history of computers and inventors.</li>
                      <li>Learn what is inside a computer including the operating system and applications.</li>
                      <li>Be introduced to computer programming languages and their purpose.</li>
                      <li>Learn about the computers the students interact with everyday.</li>
                    </ul>
               <div className="button-group" data-aos="fade-up" data-aos-delay="400">
              <Button variant="primary" href="/download/curriculum/computers/intro-to-computers-overview-lesson-1.pdf" download>
                                                 Lesson 1 & Overview
                                                </Button> 
            <Button variant="primary" href="/download/curriculum/computers/intro-to-computers-resources-lesson-1.pdf" download>
                                                  Lesson 1 Resources
                                                </Button>
           <Button variant="primary" href="https://forms.gle/hi6c73bqHHFUcW9a9" target="_blank">
                                                  Lesson 1 Timeline Quiz
                                                </Button>
                                                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* Unit 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Lesson 2: Input/Output Process</Accordion.Header>
              <Accordion.Body>
              <p>Students will understand how computers rely on input and output to 
                    function by exploring real-world examples and designing their own I/O 
                            system using the Input → Process → Output model.</p>
                  <h3>Learning Objectives</h3>
                    <ul>
                      <li>Identify common input and output devices and describe their purpose.</li>
                      <li>Explain the Input → Process → Output (IPO) model and why it’s essential for 
                      computers to function.</li>
                      <li>Analyze real-world systems that rely on input and output to solve everyday problems.</li>
                      <li>Design a creative I/O system by identifying appropriate input and output devices that address a real-world challenge.</li>
                      <li>Describe their designed system clearly, explaining how the input, process, and output interact.</li>
                      <li>Reflect on the importance of input/output in modern technology and identify I/O systems they use in daily life.</li>
                    </ul>
                    <div className="button-group" data-aos="fade-up" data-aos-delay="400">
              <Button variant="primary" href="/download/curriculum/computers/intro-to-computers-lesson-2.pdf" download>
                                                 Lesson 2 Procedures
                                                </Button> 
            <Button variant="primary" href="/download/curriculum/computers/intro-to-computers-resources-lesson-2.pdf" download>
                                                  Lesson 2 Resources
                                                </Button>
                                                </div>
              </Accordion.Body>
            </Accordion.Item>

            {/* Unit 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Lesson 3: Logic & Algorithm</Accordion.Header>
              <Accordion.Body>
                <p>Coming Soon.</p>
                <Button variant="primary" href="#">
                  Download Color Guide
                </Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* Unit 4 */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>Lesson 4: Understanding Data & Binary Code</Accordion.Header>
              <Accordion.Body>
                <p>Coming Soon.</p>
                <Button variant="primary" href="#">
                  Download Color Guide
                </Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* Unit 4 */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>Lesson 5: Why Computers Matter</Accordion.Header>
              <Accordion.Body>
                <p>Coming Soon.</p>
                <Button variant="primary" href="#">
                  Download Color Guide
                </Button>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </Container>
      </section>
    </main>
  );
};

export default IntroToComputers;
