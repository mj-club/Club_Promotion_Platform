import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from "components/booth/title";
// import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import Quiz from "components/chongdongyeon/quiz";
import hunterImg from "../../img/hunter.png";
import testbg from "../../img/testbg.jpeg";
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
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <Quiz />
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="relativeDiv">
              <img id="hunter" src={hunterImg} />
              <span id="hunterMent">안녕하세요</span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};

export default About;