import { Box, Button, setRef } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import { dbService, storageService } from "fbase";
import Hero from "../components/booth/hero";
import { PortfolioProvider } from "../context/context";
import Introduce from "components/booth/introduce";
import Contact from "components/booth/contact";
import Footer from "components/booth/footer";
import Projects from "components/booth/infomation";
import imageMap from "../img/empty.png";
import imageMapMobile from "../img/empty_m.jpeg";
import art from "../img/art.png";
import social from "../img/social.png";
import religion from "../img/religion.png";
import sports from "../img/sports.png";
import study from "../img/study.png";
import volunteer from "../img/volunteer.png";
import exhibition from "../img/exhibition.png";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";
// import artImg from "../img/art.jpg";

const sections = [
  { title: "학술분과", url: "/" },
  { title: "사회연구분과", url: "/" },
  { title: "전시창작분과", url: "/" },
  { title: "체육분과", url: "/" },
  { title: "연행예술분과", url: "/" },
  { title: "종교분과", url: "/" },
  { title: "봉사분과", url: "/" },
];

const Main = () => {
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
    <>
      <div id="mapContainer">
      <a href="" title="" style={{position: "absolute", left: "35.5%", top: "50%", width: "11%", height: "20%", zIndex: "2", backgroundColor: "yellow", opacity: "0.3"}}></a>
        <Fade duration={1500} delay={500} distance="30px">
          <Image
            src={isDesktop ? imageMap : imageMapMobile}
            id="mainImage"
            fluid
          />
        </Fade>
        <Fade
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={isDesktop ? social : social} id="social" fluid></Image>
          <Image
            src={isDesktop ? religion : religion}
            id="religion"
            fluid
          ></Image>
          <Image src={isDesktop ? art : art} id="art" fluid></Image>
          <Image
            src={isDesktop ? exhibition : exhibition}
            id="exhibition"
            fluid
          ></Image>
          <Image src={isDesktop ? study : study} id="study" fluid></Image>
          <Image
            src={isDesktop ? volunteer : volunteer}
            id="volunteer"
            fluid
          ></Image>
          <Image src={isDesktop ? sports : sports} id="sports" fluid></Image>
        </Fade>
      </div>
    </>
  );
};

export default Main;
