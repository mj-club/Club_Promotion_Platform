import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "components/booth/title";
import { ShowingGridList } from "components/booth/carousel";
import Image from "react-bootstrap/Image";

const Projects = () => {
  const { clubObj, posters } = useContext(PortfolioContext);
  const recruitment = clubObj.recruitment;
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
    recruitment.map((line, i) => {
                        
      const p = document.getElementById("information-text");
      const lineElem = document.createElement("span");
      lineElem.innerHTML = `<span>${line}</span><br />`;
      p.appendChild(lineElem);
      
})
    
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title={"신입생 모집 안내"} />
          <Row>
            <Col lg={6} sm={12} className="mr-5">
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={600}
                distance="30px"
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">{""}</h3>
                  <div className="contentBound">
                    <p id="information-text"></p>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col lg={5} sm={12}>
              <Fade
                right={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={600}
                distance="30px"
              >
                {/* className="project-wrapper__image"  className="thumbnail rounded" */}
                <div className="project-wrapper__image">
                  <div className="thumbnail rounded">
                    {posters.length == 1 ? <Image src={posters[0]} fluid /> : <ShowingGridList urls={posters} />}
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
