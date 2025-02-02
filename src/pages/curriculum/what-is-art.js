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
        data-aos="fade"
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
          src={getImage("img/Marc-horses.jpg")}
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

export default WhatIsArt;
