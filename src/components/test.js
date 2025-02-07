<Container className="icon-row" data-aos="fade-up" data-aos-delay="300">
          <Row className="align-items-center justify-content-start">
            {aboutIcons.map((icon, index) => (
             <Col key={index} xs="auto" sm="auto" md="auto" lg="auto" className="text-center icon-item">
                <div className="icon-wrapper">
                  {/* Render Font Awesome or Bootstrap Icons Based on Type */}
                  {icon.type === "bi" ? (
                    <i className={`bi ${icon.icon} icon-small`}></i> // Bootstrap Icon
                  ) : (
                    <FontAwesomeIcon icon={faReact} className="icon-small" /> // Font Awesome React Icon
                  )}
                </div>
                <p className="icon-label">{icon.label}</p>
              </Col>
            ))}
          </Row>
        </Container>