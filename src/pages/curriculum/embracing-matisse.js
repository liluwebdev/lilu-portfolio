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
      return require(`../../assets/curriculum/${imagePath}`);
    } catch (error) {
      console.error("Image not found:", imagePath);
      return "";
    }
  };

function EmbracingMatisse() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main">
      {/* Page Title */}
      <div
        className="page-title dark-background"
        data-aos="fade"
      >
        <Container className="position-relative">
          <h1>Embracing Matisse’s Colors: An Inclusive Art Journey</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/curricula">Curricula</Link></li>
              <li className="current">Embracing Matisse</li>
            </ol>
          </nav>
        </Container>
      </div>
      <section className="curriculum-overview section">
  <Container>
    <Row className="align-items-start" data-aos="fade-up">
      <Col lg={8} md={12} className="curriculum-content">
        <h2>Unit Overview: “Embracing Matisse’s Colors: An Inclusive Art Journey”</h2>
        <p>This curriculum unit is designed to immerse 4th to 6th-grade students in the vibrant 
            world of Fauvism, focusing on the works of Henri Matisse and his contemporaries. 
            Over six weeks, students explore various aspects of Fauvism – from color and shape 
            to pattern and texture – through a series of interactive, hands-on activities 
            and lessons. Each week builds upon the last, culminating in a final project 
            where students apply their learned skills to create Fauvist-inspired artworks.</p>
        <h3>Week-by-Week Breakdown:</h3>
        <ul>
          <li>Introduction to Matisse & Other Fauvists: Exploring the history and critical figures of Fauvism and understanding the fundamental art elements of color, shape, and line.</li>
          <li>Matisse’s World of Color: Delving into the innovative use of color by Matisse and his peers and understanding color relationships through collaborative projects.</li>
          <li>Exploring Shape and Pattern: Examining organic shapes and patterns in Fauvist art and creating individual artworks inspired by these elements.</li>
          <li>Creative Adventures with Collage: Introducing collage as a creative technique, engaging in both collaborative and individual collage projects.</li>
          <li>Beyond the Canvas: Engaging in sensory exploration with various tactile materials and an online field trip to an art museum featuring Fauvist works.</li>
          <li>Culminating Art Projects and Presentation: Creating personal Fauvist-inspired artworks using mixed media, participating in peer critique sessions, and reflecting on the artistic journey.</li>
        </ul>
        <h3>Conclusion: Embracing Artistic Expression and Fauvism</h3>
        <p>This curriculum educates students about a significant art movement and fosters an 
            environment of inclusivity and creativity. Throughout the six weeks, students are 
            encouraged to express themselves, explore various artistic techniques, and develop a 
            deeper understanding of art’s emotional and expressive potential. The unit is structured 
            to cater to multiple learning styles and abilities, ensuring every student can participate 
            fully and benefit from the artistic journey.</p>
        <p>By the end of the unit, students will have gained a comprehensive understanding of Fauvism, 
            experienced the joy of artistic creation, and developed communication and critical thinking 
            skills. Most importantly, they will have discovered new ways to express themselves and 
            interpret the world around them through art, echoing the innovative spirit of Henri Matisse 
            and his fellow Fauvists. This curriculum stands as a testament to the power of art education 
            in shaping young minds and fostering a lifelong appreciation for artistic expression.</p>
      </Col>
      <Col lg={4} md={12} className="focus-art">
        <img 
          src={getImage("img/henri-matisse-gerbe.jpg")}
          alt="Henri Matisse Gerbe - focus art" 
          className="focus-art-image"
        />
         <img 
          src={getImage("img/Marc-horses.jpg")}
          alt="Franz Marc - Horses - focus art" 
          className="focus-art-image"
        />
         <img 
          src={getImage("img/Maurice-de-Vlaminck.jpg")}
          alt="Maurice de Vlaminck - focuse art" 
          className="focus-art-image"
        />
        <h2>Focus Art & Materials</h2>
        <ul>
          <li><strong>Art Supplies:</strong>paper, paint (watercolors,tempera, acrylic), brushes, colored 
          pencils, markers, scissors, glue, colored paper, fabric, ribbon, buttons, large sheets of paper, textured paper, foam, beads</li>
          <li><strong>Handouts and Digital Files:</strong>slideshows, color theory handout, met museum handout</li>
          <li><strong>Technology:</strong>Smart board, Projector, Computer</li>
        </ul>
      </Col>
    </Row>
  </Container>
</section>

      {/* 📌 Accordion Menu for Curriculum Sections */}
      <section className="curriculum-accordion section">
        <Container data-aos="fade-up">
          <h2 className="text-center">Curriculum Breakdown</h2>

          <Accordion defaultActiveKey="0">
            {/*  Unit 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Lesson 1: Introduction to Matisse & Other Fauvists</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>Students will gain an understanding of Fauvism, focusing on the works of Henri Matisse, Franz Marc, and Maurice de Vlaminck. They will explore fundamental art elements like color, shape, and line and discuss the role of art in personal expression.</p>
                <h4>Materials</h4>
                <ul>
                <li>Slideshow on Fauvism (Provided)</li>
                <li>Images of artworks by Matisse, Marc, and Vlaminck</li>
                <li>Art supplies: paper, paint (watercolors or tempera), brushes, colored pencils, markers</li>
                <li>Projector or smart board for displaying art images</li>
                <li>Handouts about Fauvism and its key artists</li>
                 </ul>
                <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Download Guide
                </Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* Unit 2 */}
            <Accordion.Item eventKey="1">
            <Accordion.Header>Lesson 2: Matisse’s World of Color</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>Students will explore Henri Matisse’s and Franz Marc’s innovative use of color and its emotional impact. They will engage in a collaborative color wheel project to understand color relationships and create artworks based on color themes inspired by Matisse.</p>
                <h4>Materials</h4>
                <ul>
                <li>Images of artworks by Matisse and Marc focusing on color use</li>
                <li>Art supplies: paints (various colors), brushes, paper, color wheel templates</li>
                <li>Projector or smart board for displaying art images</li>
                <li>Handouts on color theory and color wheel</li>
                 </ul>
                 <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Download Guide</Button>
              </Accordion.Body>
            </Accordion.Item>

            {/*  Unit 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Lesson 3: Exploring Shape and Pattern</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>Students will explore the Fauvists’ use of organic shapes and patterns, particularly in the works of Henri Matisse. They will engage in activities to create their artwork inspired by Matisse’s use of shapes and explore forms and patterns through individual artwork.</p>
                <h4>Materials</h4>
                <ul>
                <li>Images of Matisse’s artworks focusing on shapes and patterns</li>
                <li>Art supplies: paper, scissors, colored paper for collage, glue, pencils, markers</li>
                <li>Projector or smart board for displaying art images</li>
                 </ul>
                 <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Download Guide</Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* Unit 4 */}
             <Accordion.Item eventKey="3">
              <Accordion.Header>Lesson 4: Creative Adventures with Collage</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>Students will be introduced to collage as an artistic technique. They will participate in a collaborative collage project to explore abstraction and patterns and then create personalized collage projects to express their ideas and creativity.</p>
                <h4>Materials</h4>
                <ul>
                <li>Examples of collages, especially those by Matisse and other Fauvists</li>
                <li>Assorted papers (colored, textured, patterned)</li>
                <li>Scissors, glue, and other collage materials (like fabric, ribbon, buttons)</li>
                <li>Large sheets of paper or poster board for the collaborative project</li>
                <li>Projector or smart board for displaying art images</li>
                 </ul>
                 <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Download Guide</Button>
              </Accordion.Body>
            </Accordion.Item>
            
             {/* Unit 5 */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>Lesson 5: Beyond the Canvas</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>Students will explore tactile materials for sensory exploration in art, participate in an online field trip to an art museum featuring the works of Matisse and other Fauvists, and engage in group discussions and reflective writing about their experiences and learnings.</p>
                <h4>Materials</h4>
                <ul>
                <li>Variety of tactile materials (e.g., fabrics, textured papers, foam, beads)</li>
                <li>Access to computers or tablets for the online field trip</li>
                <li>Links to virtual tours of museums with Fauvist collections</li>
                <li>Notebooks and writing materials for reflections</li>
                <li>Projector or smart board for displaying art images</li>
                 </ul>
                 <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Download Guide</Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* Unit 6 */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>Lesson 6: Culminating Art Projects and Presentation</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>Students will create their own Fauvist-inspired artworks using a chosen medium. It can be mixed media, acrylic paint, or collage. They will engage in peer critique and group sharing sessions to develop their communication skills and present their final projects, reflecting on their artistic journey throughout the unit.</p>
                <h4>Materials</h4>
                <ul>
                <li>Various art supplies (paints, brushes, collage materials, textured papers, etc.)</li>
                <li>Space for artwork display</li>
                <li>Notebooks or paper for final reflections</li>
                <li>Projector or smart board for displaying art images</li>
                 </ul>
                 <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Download Guide</Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </main>
  );
};

export default EmbracingMatisse;
