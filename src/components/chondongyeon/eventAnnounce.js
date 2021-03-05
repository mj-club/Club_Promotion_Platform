
import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from "components/booth/title";
// import ProjectImg from '../Image/ProjectImg';

import Paper from '@material-ui/core/Paper';


const Projects = () => {
  const { departmentObj } = useContext(PortfolioContext);
  const { event } = departmentObj;
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
    <section id="projects" >
      <Container>
        <div className="project-wrapper">
          <Title title="이벤트 소개" />

              <Row >
      <Paper elevation={3} style={{ display:'flex', justifyContent: "center", backgroundColor: "white", zIndex: "5", width: "45vw", padding: "5% 0"}}>

                <Col lg={8} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{event[0]}</h3>
                      <div>
                        <p>
                          {event.map((line, i)=>{return i!==0? <span><span>{line}</span><br></br></span>:<></>})}
                        </p>
                      </div>

                      
                    </div>
                  </Fade>
                </Col></Paper>
                <Col lg={4} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    {/* <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div> */}
                  </Fade>
                </Col>
              </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;