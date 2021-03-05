import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from "components/booth/title";
// import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import Quiz from "components/chondongyeon/quiz"
import QuizTwo from "components/chondongyeon/quiz2"

const About = () => {
  const { departmentObj } = useContext(PortfolioContext);
  const { information, information_m , key} = departmentObj;

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
  }, []);

  return (
    <section id="about" className={key}>
      <Container>
        <Title title="QUEST" />
        {/* <Quiz /> */}
        <QuizTwo />
        {/* <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                {information.map((line)=>(
                  <span><span>{line}</span><br></br></span>
                ))}
                </p>
                
              </div>
            </Fade>
          </Col>
        </Row> */}
      </Container>
      
    </section>
  );
};

export default About;