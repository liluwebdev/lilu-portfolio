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

function PaperMacheMasks() {
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
          <h1>Paper Mache Masks: A Cultural View</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/curricula">Curricula</Link></li>
              <li className="current">Paper Mache Masks: A Cultural View </li>
            </ol>
          </nav>
        </Container>
      </div>
      <section className="curriculum-overview section">
  <Container>
    <Row className="align-items-start" data-aos="fade-up">
      <Col lg={8} md={12} className="curriculum-content">
        <h2>Paper Mache Masks: A Cultural View</h2>
        <p>This lesson introduces students to cultural awareness through the exploration 
            of masks from different cultures, such as Native American, Mexican, and African 
            traditions. Students will analyze these masks, discuss their artistic and cultural 
            significance, and create their own sculptural masks using paper mâché techniques.</p>
        <h4>Time Frame</h4>
        <ul>
            <li>5 Class Sessions (50 minutes each)</li>
        </ul>
        <h3>Student Learning Outcomes</h3>
        <ul>
        <li>Gain an understanding of cultural traditions and artistic expression</li>
        <li>Learn about facial characteristics such as symmetry and exaggeration</li>
        <li>Develop craftsmanship by sculpting with paper mâché</li>
        <li>Explore creativity in mask design and decoration</li>
        </ul>
        <h3>Vocabulary</h3>
        <ul>
        <li><strong>Symmetry</strong> – Mirroring or making two sides identical.</li>
        <li><strong>Relief</strong> – A three-dimensional object raised from a flat base.</li>
        <li><strong>Sculpture</strong> – Art created by carving, modeling, casting, or constructing.</li>
        <li><strong>Abstraction</strong> – Art that does not aim for realistic representation.</li>
        <li><strong>Adornment</strong> – Adding decorative elements to an artwork.</li>
    </ul>
    <h3>Assessment Criteria</h3>
    <ul>
        <li><strong>Creative Expression</strong> – Thoughtfulness and originality in design</li>
        <li><strong>Execution</strong> – Ability to follow directions and apply <em>paper mâché techniques</em></li>
        <li><strong>Artistic Reasoning</strong> – Understanding of <strong>cultural context and vocabulary</strong></li>
        <li><strong>Presentation</strong> – Ability to discuss their mask's meaning and artistic process</li>
    </ul>
    <h2>Additional Teacher Resources</h2>
      <p>
        <a href="http://www.indians.org/articles/native-american-masks.html" target="_blank" rel="noopener noreferrer">
          Native American Masks:
        </a>
        <br />
        <a href="http://www.mexican-folk-art-guide.com/Mexican-masks.html" target="_blank" rel="noopener noreferrer">
          Mexican Masks:
        </a>
        <br />
        <a href="http://www.contemporary-african-art.com/african-masks.html" target="_blank" rel="noopener noreferrer">
          African Masks:
        </a>
      </p>
    <h3>Why This Lesson Works</h3>
    <p>This project is a hands-on, <strong>engaging way</strong> to explore <strong>art, culture, 
        and craftsmanship</strong>. Students not only develop <strong>technical skills</strong> 
        but also <strong>critical thinking</strong> about artistic traditions from around the world.</p>


      </Col>
      <Col lg={4} md={12} className="focus-art">
      <h2>Focus Art & Materials</h2>
        <img 
          src={getImage("img/venice-mask-shop.jpg")}
          alt="Venice Masks for Carnivale" 
          className="focus-art-image"
        />
      <ul>
        <li>Blank Mask or Balloon</li>
        <li>Newspaper & White Computer Paper</li>
        <li>Acrylic Paint & Brushes</li>
        <li>Craft Supplies: Construction Paper, Sequins, Pipe Cleaners, etc.</li>
        <li>Elastic String</li>
        <li>School Glue & Water (for paste)</li>
        <li>Bowls for dipping</li>
        <li>Masking Tape & Aluminum Foil</li>
        <li>Scissors</li>
        </ul>
         <Button variant="primary" href="/download/curriculum/paper-mache-masks/PaperMacheMasks-1.pdf" download>
                          Download Guide</Button>
      </Col>
    </Row>
  </Container>
</section>

      {/* Accordion Menu for Curriculum Sections */}
      <section className="curriculum-accordion section">
        <Container data-aos="fade-up">
          <h2 className="text-center">Curriculum Breakdown</h2>

          <Accordion defaultActiveKey="0">
            {/* Accordian 1*/}
            <Accordion.Item eventKey="0">
            <Accordion.Header>Daily Lesson Breakdown</Accordion.Header>
              <Accordion.Body>
              <h3>Day 1 – Introduction & Cultural Exploration</h3>
                <ul>
                    <li>Discuss the role of masks in <strong>different cultures</strong>.</li>
                    <li>Show examples (physical or digital) of <strong>Native American, Mexican, and African masks</strong>.</li>
                    <li>Ask students to <strong>analyze and describe</strong> expressions, symmetry, and meaning.</li>
                    <li>Have students sketch their <strong>own mask designs</strong> before starting.</li>
                </ul>

                <h3>Day 2 – Building the Mask Base</h3>
                <ul>
                    <li>Use a <strong>balloon or blank mask</strong> as a base.</li>
                    <li>Apply <strong>three layers</strong> of <em>paper mâché strips</em> (let each layer dry before adding another).</li>
                    <li>Students shape features like <strong>eyebrows, cheekbones, or animal elements</strong>.</li>
                </ul>

                <h3>Day 3 – Refining the Design</h3>
                <ul>
                    <li>Check the mask’s <strong>thickness</strong> and <strong>shape</strong>.</li>
                    <li>Students refine details by adding <strong>extra layers or sculptural elements</strong> using aluminum foil and tape.</li>
                </ul>

                <h3> Day 4 – Painting & Decoration</h3>
                <ul>
                    <li>Paint masks with <strong>bold colors and patterns</strong>.</li>
                    <li>Add decorations like <strong>sequins, pipe cleaners, feathers, or textured paper</strong>.</li>
                    <li>Encourage students to follow their <strong>original design plan</strong> while experimenting with artistic expression.</li>
                </ul>

                <h3>Day 5 – Presentation & Reflection</h3>
                <ul>
                    <li>Students present their masks to the class.</li>
                    <li>Discuss <strong>design choices, cultural influences, and creative process</strong>.</li>
                    <li>Group <strong>reflection and discussion</strong> on artistic and cultural elements.</li>
                </ul>

              </Accordion.Body>
            </Accordion.Item>

            {/*  Accordian 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Lesson Procedures: Making the Mask</Accordion.Header>
              <Accordion.Body>
              <div className="video-container">
                        <iframe 
                        width="100%"
                        height="450px"
                        src="https://www.youtube.com/embed/USPk8Z-QZA8"
                        title="Fieldwork Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                        </div>
                <h3>Step-by-Step</h3>
                <ol>
                    <li>Plan the design—have paper and colored pencils available for the students to create their designs on paper before attempting to make their tribal or animal mask.</li>
                    <li>If using a balloon, blow it up to about the same size of the mask you’d like to make. Measure as best as you can the distance between the nose for the eye holes, nose, and mouth. Mark them with a black permanent marker so you can see and work around them. If you’re using a blank mask, you’re set for the next step.</li>
                    <li>Cut your newspaper into strips, with the grain of the print—the paper will tear easily. They should be roughly 6 inches long and 1 inch wide. You’ll need enough newspaper to cover the mask three times plus any additional details you want to add.</li>
                    <li>Create the paste by mixing school glue and water in a large bowl. You’ll want it to be a thin and soupy consistency.</li>
                    <li>Dip the strips of newsprint into the glue mixture and shake off the excess. If this does not work well, get the glue on your hands and place the strips on the mask. Flatten them down with your gluey hands. Remember to place the strips across the face horizontally (left to right). Take care around the holes and try to avoid them. You can always cut or reshape them later if they’re not exactly right.</li>
                    <li>After the first layer dries, apply the second layer in a vertical direction (top to bottom).</li>
                    <li>Let the second layer dry completely before adding the third horizontal layer.</li>
                    <li>Once the three layers are dry, add details by crumpling bits of paper to create features like eyebrows, ears, or cheekbones. Use masking tape to hold them in place. You can also use aluminum foil to extend the mask outward, creating shapes like ears or flower petals.</li>
                    <li>Once the desired shape is achieved, apply a final layer of white computer paper vertically across the mask. Let it dry. If using a balloon, pop it at this stage. Try on the mask and adjust the holes for the eyes, nose, and mouth as needed. If using a pre-made mask, peel it out of the paper mâché and fix any edges with masking tape and additional layers.</li>
                    <li>Finally, paint and decorate the mask. Use different colored paint and craft supplies to personalize it. <strong>Tip for saving money:</strong> Use recycled art supplies from older projects.</li>
                         </ol>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </main>
  );
};

export default PaperMacheMasks;
