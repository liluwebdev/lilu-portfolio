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

function WhatIsArt() {
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
          <h1>What is Art? A Pop Art Unit</h1>
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
        <h2>Unit Overview: “What is Art?” A Pop Art Unit</h2>
        <p>Pop Art was a movement that recognized that art could come in various ways. 
            Pop, meaning popular, was based on the notion that the popular or everyday 
            items could have artistic value. This unit explores how to create pop art styles, 
            including those of Andy Warhol and Roy Lichtenstein. It focuses on Pop Art and 
            design principles and how to critique them.</p>
        <h4>Time Frame</h4>
        <ul>
            <li>Lesson One: Historical & Cultural Context – 1, 50-minute class period.</li>
            <li>Lesson Two: Artistic Perception – 3, 50-minute class periods.</li>
            <li>Lesson Three: Skill Building – 3, 50-minute class periods.</li>
            <li>Lesson Four: Artistic Expression – 5, 50-minute class periods.</li>
            <li>Lesson Five: Aesthetic Analysis – 5, 50-minute class periods.</li>
        </ul>
        <h3>Student Learning Outcomes</h3>
        <ul>
        <li>Learn to use tools in Adobe Photoshop.</li>
        <li>Learn to use tools in Adobe Illustrator.</li>
        <li>Learn how to import images, mask, and cut them out in Photoshop.</li>
        <li>Learn different color schemes and their importance in design.</li>
        <li>Come up with their designs for projects.</li>
        <li>Learn about the Pop Art movement, its characteristics, and a few artists who participated, like Andy Warhol and Roy Lichtenstein.</li>
        <li>Learn how to create their own Pop Art Movie Poster.</li>
        </ul>
        <h3>Vocabulary</h3>
        <ul>
        <li><strong>Position</strong> is the placement of an object in an image.</li>
        <li><strong>Contrast</strong> is the difference in size (big/small), color (bright/dark), or line (thick/thin).</li>
        <li><strong>Scale</strong> is the sizing of elements on a canvas.</li>
        <li><strong>Composition</strong> is an arrangement of objects in an artwork.</li>
        <li><strong>Emphasis</strong> is the dominance of an object in an image.</li>
        <li><strong>Appropriation</strong> refers to the practice of artists intentionally borrowing, reusing, copying, or altering existing elements, images, and objects within a new work.</li>
        <li><strong>Color Scheme</strong> is a plan for organizing colors.</li>
        <li><strong>Monochromatic</strong> uses a single hue while adding white and black (tint and shade) to modify the hue.</li>
        <li><strong>Analogous</strong> color schemes use hues that sit next to each other on the color wheel. They can be warm, cool, or a combination of colors as long as they are next to each other.</li>
        <li><strong>Complementary</strong> colors are hues that are directly across from each other on the color wheel. A complement of a color absorbs all the light waves the color reflects and is the strongest contrast to the color. Mixing a hue with its complementary color dulls it.</li>
        <li><strong>Split Complements</strong> are one hue and the two hues directly next to its complement. Split complements tend to offer more of a variety of color scheme choices than direct complements.</li>
        <li><strong>Color Triads</strong> are groups of 3 equally distant colors on the color wheel. For example, the primary colors (red, yellow, blue) are a color triad.</li>
        <li><strong>Cool Colors</strong> suggest coolness and seem to recede from a viewer.</li>
        <li><strong>Warm Colors</strong> suggest warmth and seem to move toward the viewer.</li>
</ul>

            <h3>California Visual Arts Standards</h3>
            <p><strong>1.0 Artistic Perception</strong></p>
            <ul>
            <li>1.1 Identify and use design principles to discuss, analyze, and write about visual aspects in the environment and in works of art, including their own.</li>
            </ul>
            <p><strong>2.0 Creative Expression</strong></p>
            <ul>
            <li>2.1 Solve a visual arts problem that involves the effective use of the elements of art and the principles of design.</li>
            <li>2.4 Review and refine observational drawing skills.</li>
            </ul>
            <p><strong>3.0 Historical and Cultural Context</strong></p>
            <ul>
            <li>3.3 Identify and describe trends in the visual arts and discuss how the issues of time, place, and cultural influence are reflected in selected works of art.</li>
            <li>3.4 Discuss the purposes of art in selected contemporary cultures.</li>
            </ul>
            <p><strong>4.0 Aesthetic Valuing</strong></p>
            <ul>
            <li>4.4 Articulate the process and rationale for refining and reworking one of their own works of art.</li>
            <li>4.5 Employ the conventions of art criticism in writing and speaking about works of art.</li>
            </ul>
            <p><strong>5.0 Connections, Relationships, Applications</strong></p>

      </Col>
      <Col lg={4} md={12} className="focus-art">
      <h2>Focus Art & Materials</h2>
        <img 
          src={getImage("img/Shot_Marilyns-Andy_Warhol.jpg")}
          alt="Henri Matisse Gerbe - focus art" 
          className="focus-art-image"
        />
         <img 
          src={getImage("img/Roy_Lichtenstein_Drowning_Girl.jpg")}
          alt="Franz Marc - Horses - focus art" 
          className="focus-art-image"
        />
        <ul>
        <li>Computer</li>
        <li>LCD Projector</li>
        <li>Student Computer Access</li>
        <li>Writing Materials</li>
        <li>Adobe Photoshop Access</li>
        <li>Adobe Illustrator Access</li>
        <li>The Visual Experience (book, multiple pages.)</li>
        <li>Slideshow: <i>Color Schemes</i></li>
        <li>Slideshow: <i>What is Art?</i></li>
        <li>Collage Presentation Worksheet</li>
        <li>Self Critique Worksheet</li>
        <li>Presentation Worksheet</li>
        <li>Critique Worksheet</li>
        <li>Rubrics</li>
        <li>Lesson Test</li>
        <li>Various works of Roy Lichtenstein</li>
        <li>Various works of Andy Warhol</li>
        <li>Various works of James Rosenquist</li>
        </ul>
         <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
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
            {/*  Unit 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Lesson One - Historical & Cultural Context</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>Students will be introduced to Andy Warhol’s artwork and Pop Art. 
                    They will also be introduced to the idea that art has a broad 
                    meaning that includes that of design. First, students will engage 
                    in asking themselves what is art, then we’ll walk through a brief 
                    history of Andy Warhol and Pop Art. At the end of class, they will 
                    take a short quiz to see if they retained any information from the lecture.</p>
                    <div className="video-container">
                        <iframe 
                        src="https://www.youtube.com/embed/JtOHSFlckLE"
                        title="Fieldwork Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                        </div>
                <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Lesson Guide
                </Button> <br />
                <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Slideshow
                </Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* Unit 2 */}
            <Accordion.Item eventKey="1">
            <Accordion.Header>Lesson Two - Artistic Perception Color Schemes</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>Using Andy Warhol’s Pop Art styling, students will learn how to create a color 
                    wheel in Illustrator. Then using the colors, students will color images using 
                    color schemes: analogous, complementary, triad, monochromatic, primary, and 
                    split complementary, cool colors, and warm colors to create 6 portrait images 
                    to be displayed side-by- side.</p>
               
                 <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Lesson Guide
                </Button> <br />
                <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                  Slideshow
                </Button>
              </Accordion.Body>
            </Accordion.Item>

            {/*  Unit 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Lesson Three - Skill Building, Collage</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>Collaging is a way to create personal images that draw attention 
                    to the viewer. The students will be learning what contrast, scale, 
                    and position means when it comes to design through collage. This project 
                    will be done in either photoshop and/or illustrator. They must have access 
                    to the internet, optionally a digital camera. Students will present their 
                    collages at the end of the lesson.  </p>
                    <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                     Lesson Guide
                    </Button> <br />
                    <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                     Slideshow
                </Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* Unit 4 */}
             <Accordion.Item eventKey="3">
              <Accordion.Header>Lesson Four - Artistic Expression, Poster</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>The focus of this project is to create a movie poster in a pop art or 
                    comic book style. Students are to use a photo of a character and turn it into a 
                    3 color + black/white image. Then creatively into a movie poster. Backgrounds 
                    can be scenes or abstract shapes. It’s up to the student to come up with the 
                    design. The logos from the movie do not have to follow the color scheme.
                    </p>
                    <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                     Lesson Guide
                    </Button> <br />
                    <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                     Slideshow
                </Button>
              </Accordion.Body>
            </Accordion.Item>
            
             {/* Unit 5 */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>Lesson Five - Artistic Analysis</Accordion.Header>
              <Accordion.Body>
                <h3>Objective:</h3>
                <p>During the 5th lesson, students are to present and analyze their 
                    own work and the work of others. There is also a test at the end of the lesson 
                    to solidify the knowledge they were taught. The lesson will go over the four 
                    stages of art criticism which are: description, analysis, interpretation, 
                    and evaulation. The teacher will make note of why its important to use a 
                    critique when talking about design.</p>
        
                    <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                     Lesson Guide
                    </Button> <br />
                    <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                     Slideshow
                </Button> <br />
                <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                     Lesson Guide
                    </Button> <br />
                    <Button variant="primary" href="/downloads/unit1-guide.pdf" download>
                     Slideshow
                </Button>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </Container>
      </section>
    </main>
  );
};

export default WhatIsArt;
