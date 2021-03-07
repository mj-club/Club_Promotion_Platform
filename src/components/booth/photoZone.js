import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "components/booth/title";
import Photocard from "./photoCard";
import Image from "react-bootstrap/Image";
const Content = () => {
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
  }, []);

  return (
    <section id="contentVideo">
      <Container id="contentroot" fluid>
        <Title title="동아리 영상" />
        <Photocard></Photocard>
      </Container>
    </section>
  );
};

export default Content;
