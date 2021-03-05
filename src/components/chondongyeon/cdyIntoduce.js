import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import Title from "components/booth/title";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const { departmentObj } = useContext(PortfolioContext);
  const { introduction, key } = departmentObj;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  })
  return (
    <section id="contact" className={key}>
      <Container>
        <Title title="총동연 소개" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                {/* <AboutImg alt="profile picture" filename={} /> */}
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                {introduction.map((line)=>(
                  <span><span>{line}</span><br></br></span>
                ))}
                </p>
                
                {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      github
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;