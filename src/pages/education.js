import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/education.scss";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/education.scss";

const getImage = (imagePath) => {
  try {
    return require(`../assets/curriculum/${imagePath}`);
  } catch (error) {
    console.error("Image not found:", imagePath);
    return "";
  }
};


function Education() {
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
          <h1>Education</h1>
          <p>
          My approach to education is centered on fostering creativity, problem-solving, 
          and real-world application. With a background in both teaching and technology, 
          I create learning experiences that are student-driven, project-based, and adaptable 
          to different learning styles. I believe in empowering students and educators with the 
          tools to succeed in a digital world.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Education</li>
            </ol>
          </nav>
        </Container>
      </div>
      {/* End Page Title */}
      {/* Sticky Navigation for Sections */}
      <nav className="education-nav">
        <Container>
          <ul>
            <li><Link smooth to="#fieldwork-summary">Fieldwork Summary</Link></li>
            <li><Link smooth to="#art-education">Value of Art Education</Link></li>
            <li><Link smooth to="#classroom-management">Classroom Management</Link></li>
            <li><Link smooth to="#technology-integration">Technology Integration</Link></li>
          </ul>
        </Container>
      </nav>
      {/* Sections */}
 <Container fluid className="education-content">
         {/* Fieldwork Section */}
      <section id="fieldwork-summary" className="education-section flush-top">
        <Container>
          <Row className="align-items-center">
            {/* 🔹 Image Column */}
            <Col lg={4} md={4} sm={12} data-aos="fade-right" className="fieldwork-image">
              <img 
               src={getImage("fieldwork_art_experience_torrance.jpg")}
                alt="Fieldwork Experience" 
                className="img-fluid rounded shadow"
              />
            </Col>

            {/* 🔹 Text Column */}
            <Col lg={8} md={8} sm={12} data-aos="fade-up">
             <Row className="fieldwork-text">
              <h2>Fieldwork Experience</h2>
              <p>
              I completed my fieldwork at the Art Experience Studio in Torrance, CA. Mrs. Lee-Jean Lin has been my
               mentor throughout the process. I’ve learned so much about advocating for those with special needs 
               and disabilities, how to engage with students and the many different facets of learning when it 
               comes to art.
              </p>
              <p>
              I’ve attached a video presentation of my educational experience at the Art Experience Studio. 
              Thank you for letting me be a part of the team.
              </p>
              </Row>
              <Row class-Name="fieldwork-video">
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/d3kjABsfaaM"
                  title="Fieldwork Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              </Row>
            </Col>

          </Row>
        </Container>
      </section>


             {/* The Value of Art Education Section */}
      <section id="art-education" className="education-section">
        <Container data-aos="fade-up">
          <h2>The Value of Art Education</h2>
          <p className="education-intro">
            Art education teaches the value of the human spirit and condition. Through art history lessons, students 
            learn how early man persevered or how the black plague stymied growth. Art is a reflection of cultural 
            ideals and historical attitudes. It is a record of human interaction and the importance of creative thinking.
          </p>

          <Row className="gy-4">
            <Col lg={6} data-aos="fade-up" data-aos-delay="100">
              <p>
                The ability to think critically means seeing other perspectives. Growth cannot happen inside of a box; 
                it must break free. Art education helps give students varying perspectives. They learn that there is 
                often no one-size-fits-all answer to everything. Art helps students see the different parts of something 
                to create a whole.
              </p>
              <blockquote>
                <p>
                  "Learning through art promotes the idea that there is more than one solution to a problem or more than one answer to a question."
                </p>
                <cite>— Elliot Eisner, <em>The Arts and the Creation of Mind</em></cite>
              </blockquote>
            </Col>

            <Col lg={6} data-aos="fade-up" data-aos-delay="200">
              <p>
                Art challenges our thinking; it encourages us to consider diverse perspectives and develop creative solutions for any challenges. Art opens our minds and helps us to grow creatively, intellectually, and spiritually. It teaches us how to persevere, imagine, and learn from experiences.
              </p>
              <p>
                Students who participate in art learn to be more creative; their ability to visualize and connect with others increases through that creativity. Art is a type of communication. It communicates ideas, thoughts, and feelings through a visual medium.
              </p>
            </Col>
            
          </Row>

          <Row className="gy-4">
            <Col lg={6} data-aos="fade-up" data-aos-delay="300">
              <p>
                John Dewey believed that students learn best by doing. He felt that students learn instinctively 
                as they communicate, explore, and express themselves through art.
              </p>
              <blockquote>
                <p>
                  "Students learn instinctively as they communicate, explore, and express themselves through art."
                </p>
                <cite>— John Dewey, <em>Art as Experience</em></cite>
              </blockquote>
            </Col>

            <Col lg={6} data-aos="fade-up" data-aos-delay="400">
              <p>
                Art education should be in every classroom. Art is not only for the artist. Art is 
                for everyone who can learn. It is an essential part of the learning process that can span every 
                school subject. Art is the connection between the physical and imagined worlds.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

    {/* 🔹 Section 2: Classroom Management (Includes Guidelines & Rewards/Consequences) */}
      <section id="classroom-management" className="education-section">
        <Container>
          <Row>
            <Col lg={6} data-aos="fade-left">
              <h2>Classroom Management & Building Rapport</h2>
              <p data-aos="fade-up" data-aos-delay="200">
              It is essential to gain the trust and respect of the students in the classroom. To do that effectively, 
              a teacher must learn their students’ names. Learning and remembering simple things about them to build 
              rapport is an excellent way to gain the respect and trust of the students. A perfect way to learn about 
              the student’s background and history is to send them home with an “About you” page to fill out 
              and give back to the teacher the next day. It can include activities that they like, their birthday, 
              and contact information so the teacher can quickly contact the students’ parents if something is amiss. </p>
              <p data-aos="fade-up" data-aos-delay="300">
              Having a classroom where the students have set expectations is critical. Daily routines are an excellent 
              way to establish good habits. It’s also important to have rewards and discipline that are well outlined and expected, so the students
              know what will happen if they miss an assignment or misbehave in class. 
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
            It’s also essential to ensure that the students feel like they can be themselves in the classroom. 
            In any school where creativity is encouraged, having students become their authentic selves can help bolster their creative juices and help them become more engaged with the lessons. Remembering that children are people is a vital part of the learning process, and knowing that students cannot necessarily check their frowns or bad days at the door of the classroom can help build a rapport between the teacher and the student. That doesn’t mean allowing the student’s feelings to disrupt the classroom but instead allowing them to use their feelings in their creative processes to a healthy degree.
               
      </p>
      </Col>
      <Col lg={6} data-aos="fade-right">
              {/* 🔹 Classroom Guidelines (Subsection) */}
              <h3 data-aos="fade-right" data-aos-delay="200">Classroom Guidelines</h3>
              <ul data-aos="fade-up" data-aos-delay="300">
                <li><strong>Be Respectful</strong> – Treat people, the classroom, and supplies with care.</li>
                <li><strong>Be Your Authentic Self</strong> – Feel comfortable being creative and engaged.</li>
                <li><strong>Be Kind</strong> – Treat others as you’d like to be treated.</li>
              </ul>

              <h4 data-aos="fade-right" data-aos-delay="400">Classroom Rules:</h4>
              <ul data-aos="fade-up" data-aos-delay="500">
                <li>Check the **Daily Schedule** posted at the door or online.</li>
                <li>Enter quietly and begin practice journals.</li>
                <li>Put all supplies back in their proper place.</li>
                <li>Everyone helps clean the community spaces.</li>
              </ul>

              {/* 🔹 Rewards & Consequences (Subsection) */}
              <h3 data-aos="fade-left" data-aos-delay="200">Rewards & Consequences</h3>

              <h4 data-aos="fade-right" data-aos-delay="300">Consequences:</h4>
              <ul data-aos="fade-up" data-aos-delay="400">
                <li><strong>First</strong> – Verbal Warning</li>
                <li><strong>Second</strong> – Written Note to Parents</li>
                <li><strong>Third</strong> – Meeting with Parents</li>
              </ul>

              <h4 data-aos="fade-right" data-aos-delay="500">Rewards System:</h4>
              <p data-aos="fade-up" data-aos-delay="600">
                Positive reinforcement helps students stay motivated.
              </p>
              <ul data-aos="fade-up" data-aos-delay="700">
                <li>Students who excel may receive a homework pass.</li>
                <li>As a class reward, students may earn a "Free Choice Day".</li>
              </ul>
              <p data-aos="fade-up" data-aos-delay="300">
              A reward system for students who do well in the classroom is also good. 
              This can bet rewards for the entire class or individual rewards for students. 
              Examples include if a single student performs well in class, they can get a homework pass. 
              If many students do well in class, there can be a “free day,” which could include having a 
              small party or possibly a “free choice day” where they can choose what they want to do as a group.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
              Having respect and compassion for your students doesn’t mean letting them walk all over you; 
              instead, it means setting boundaries and guidelines and having routines that the students can 
              count on so they know what to expect. This ensures that classroom management is obtained and 
              better results for student learning outcomes can happen.
           </p>
            </Col>
          </Row>
        </Container>
      </section>
    
      <section id="technology-integration" className="education-section">
      <Container>
        <Row className="align-items-center">
          {/* 🔹 Text Column */}
          <Col lg={6} md={12} data-aos="fade-right" className="tech-text">
            <h2>Technology Integration in Arts Education</h2>
            <p>
              Technology has transformed how we communicate, work, and create, and arts education is no exception.
              Integrating technology into the arts enhances creativity, fosters collaboration, and expands access to
              artistic resources, making it a vital component of modern education.
            </p>
            <p>
              Digital tools like graphic design software, music production apps, and interactive media allow students
              to experiment, refine, and showcase their work. Emerging technologies such as virtual reality (VR) and
              augmented reality (AR) provide immersive artistic experiences, encouraging innovation and new creative
              possibilities.
            </p>
            <p>
              Collaboration is essential in arts education, and technology breaks geographical barriers by enabling
              remote teamwork through video conferencing, shared workspaces, and real-time editing tools. It also
              facilitates interdisciplinary projects, connecting students with scientists, engineers, and programmers
              to merge art with technology.
            </p>
            <p>
              Beyond creativity, technology integration in the arts equips students with essential digital literacy
              skills such as problem-solving, adaptability, and critical thinking—key assets in today’s job market.
              As creative industries increasingly rely on digital tools, proficiency in technology prepares students
              for careers in art, design, education, and beyond.
            </p>
          </Col>

          {/* 🔹 Video Column */}
          <Col lg={6} md={12} data-aos="fade-left" className="tech-videos">
          <h5>Screencast Lesson on Photoshop Scripts</h5>
            <p>A quick lesson on how to use Photoshop Scripts to update images quickly. You can rename files, 
              change their size, file type, and color space.</p>
            <div className="video-container">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/U_D07rVlgeM"
                title="Technology in Art"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h5>Curriculum Lessons using the Adobe Creative Suite</h5>
            <p>A full curriculum lesson using the adobe creative suite. 
              This can be modified to use free resources as well. 
              GIMP would also work for this lesson, or any software 
              that can manipulate layers and colors like photoshop 
              and illustrator can.</p>
            <div className="video-container">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/mz9sPat94U0"
                title="Digital Creativity Tools"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
       
    </section>
    </Container>
    </main>
  );
};

  export default Education;