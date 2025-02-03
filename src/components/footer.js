import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
const currentYear = new Date().getFullYear();


function Footer() {

    return (
      <footer id="footer" className="footer dark-background">
        <div className="container text-center">
          <div className="social-links d-flex justify-content-center gap-3">
            <a href="#" aria-label="TInstagram">
            <FontAwesomeIcon icon={faInstagram} data-aos="fade-up" data-aos-delay="100" />
            </a>
            <a href="#" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} data-aos="fade-up" data-aos-delay="100" />
            </a>
            <a href="#" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} data-aos="fade-up" data-aos-delay="100" />

            </a>
            <a href="#" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} data-aos="fade-up" data-aos-delay="100" />

            </a>
    
          </div>
          <div className="container mt-3">
            <div className="copyright">
              <span>© {new Date().getFullYear()} Copyright</span>{" "}
              <strong className="px-1 sitename">Lilu Design Studio.</strong>{" "}
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;