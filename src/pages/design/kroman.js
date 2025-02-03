import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/main.scss";

function KromanWatchworks() {
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
          <h1>Portfolio Details</h1>
          <p>
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/design">Design</Link>
              </li>
              <li className="current">Kroman Watchworks</li>
            </ol>
          </nav>
        </Container>
      </div>
      {/* End Page Title */}

      <section id="portfolio-details" className="portfolio-details section">
        <Container data-aos="fade-up">
          {/* ✅ Swiper Image Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            navigation
            pagination={{ clickable: true }}
            className="portfolio-details-slider"
          >
            <SwiperSlide>
              <img src="/assets/img/portfolio/app-1.jpg" alt="Portfolio 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/portfolio/product-1.jpg" alt="Portfolio 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/portfolio/branding-1.jpg" alt="Portfolio 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/portfolio/books-1.jpg" alt="Portfolio 4" />
            </SwiperSlide>
          </Swiper>

          <Row className="justify-content-between gy-4 mt-4">
            <Col lg={8} data-aos="fade-up">
              <div className="portfolio-description">
                <h2>This is an example of portfolio details</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia.
                </p>
                <p>
                  Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et.
                </p>

                {/* Testimonial Section */}
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum.
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <img src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="Sara Wilsson" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>

                <p>
                  Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero.
                </p>
              </div>
            </Col>

            {/* Project Info */}
            <Col lg={3} data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Category:</strong> Web design</li>
                  <li><strong>Client:</strong> ASU Company</li>
                  <li><strong>Project date:</strong> 01 March, 2020</li>
                  <li><strong>Project URL:</strong> <a href="#">www.example.com</a></li>
                  <li>
                    <a href="#" className="btn-visit align-self-start">Visit Website</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default KromanWatchworks;
