import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "components/booth/title";
import Showimg from "components/booth/carousel";

const Projects = () => {
  const { clubObj, urls } = useContext(PortfolioContext);
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
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title={"신입생 모집 안내"} />
          <Row>
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
                    <Showimg urls={urls} />
                  </div>
                </div>
              </Fade>
            </Col>
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
                  <div id="contentBound">
                    <p id="information-text">
                      {recruitment.map((line, i) => (
                        <span key={i}>
                          <span>{line}</span> <br />
                        </span>
                      )) ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                    </p>
                    {/* <p className="mb-4">{info2 || ""}</p> */}
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
