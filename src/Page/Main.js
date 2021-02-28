import { Box, Button, setRef } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { dbService, storageService } from "fbase";
import Hero from "../components/booth/hero";
import { PortfolioProvider } from "../context/context";
import Introduce from "components/booth/introduce";
import Contact from "components/booth/contact";
import Footer from "components/booth/footer";
import Projects from "components/booth/infomation";
import imageMap from "../img/empty.jpeg";
import imageMapMobile from "../img/empty_m.jpeg";
import art from "../img/art.png";
import social from "../img/social.png";
import religion from "../img/religion.png";
import sports from "../img/sports.png";
import study from "../img/study.png";
import volunteer from "../img/volunteer.png";
import exhibition from "../img/exhibition.png";
import art_b from "../img/art_b.png";
import social_b from "../img/social_b.png";
import religion_b from "../img/religion_b.png";
import sports_b from "../img/sports_b.png";
import study_b from "../img/study_b.png";
import volunteer_b from "../img/volunteer_b.png";
import exhibition_b from "../img/exhibition_b.png";
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";
// import artImg from "../img/art.jpg";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import banner from "../img/banner.png";
import Jump from "react-reveal/Jump";
const search = {
  art: art,
  social: social,
  religion: religion,
  sports: sports,
  study: study,
  volunteer: volunteer,
  exhibition: exhibition,
  art_b: art_b,
  social_b: social_b,
  religion_b: religion_b,
  sports_b: sports_b,
  study_b: study_b,
  volunteer_b: volunteer_b,
  exhibition_b: exhibition_b,
};

const useStyles = makeStyles((theme) => ({
  abatar: {
    color: "#000000",
    backgroundColor: "#000000",
  },
}));
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

    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      const linkName = link.id.slice(0, link.id.indexOf("Link"));
      console.log(linkName);
      link.addEventListener("mouseover", (e) => {
        // const target = document.getElementById(linkName)
        // target.src = search[`${linkName}_b`]
        const target = document.getElementById(`${linkName}Hover`);
        target.style.visibility = "visible";
      });
      link.addEventListener("mouseout", () => {
        const target = document.getElementById(`${linkName}Hover`);
        target.style.visibility = "hidden";
      });
    });
  }, []);
  const classes = useStyles();
  return (
    <>
      <div id="mapContainer">
        <a id="socialLink" href="/booth/사회연구" className="link">
          {isMobile ? (
            <button className="Button">
              <span className="Button-inner">
                <span className="number">미래관</span>
                <span className="text">사회연구</span>
              </span>
            </button>
          ) : (
            <></>
          )}
        </a>
        <a id="religionLink" href="/booth/종교" className="link">
          {isMobile ? (
            <button className="Button">
              <span className="Button-inner">
                <span className="number">생활관</span>
                <span className="text">종교</span>
              </span>
            </button>
          ) : (
            <></>
          )}
        </a>
        <a id="artLink" href="/booth/연행예술" className="link">
          {isMobile ? (
            <button className="Button">
              <span className="Button-inner">
                <span className="number">본관</span>
                <span className="text">연행예술</span>
              </span>
            </button>
          ) : (
            <></>
          )}
        </a>
        <a id="exhibitionLink" href="/booth/전시창작" className="link">
          {isMobile ? (
            <button className="Button">
              <span className="Button-inner">
                <span className="number">경상관</span>
                <span className="text">전시창작</span>
              </span>
            </button>
          ) : (
            <></>
          )}
        </a>
        <a id="studyLink" href="/booth/학술" className="link">
          {isMobile ? (
            <button className="Button">
              <span className="Button-inner">
                <span className="number">도서관</span>
                <span className="text">학술</span>
              </span>
            </button>
          ) : (
            <></>
          )}
        </a>
        <a id="volunteerLink" href="/booth/봉사" className="link">
          {isMobile ? (
            <button className="Button">
              <span className="Button-inner">
                <span className="number">학관</span>
                <span className="text">봉사</span>
              </span>
            </button>
          ) : (
            <></>
          )}
        </a>
        <a id="sportsLink" href="/booth/체육" className="link">
          {isMobile ? (
            <button className="Button">
              <span className="Button-inner">
                <span className="number">행정동</span>
                <span className="text">체육</span>
              </span>
            </button>
          ) : (
            <></>
          )}
        </a>
        <a id="chongdonyeonLink" href="/" className="link">
          {isMobile ? (
            <button className="Button">
              <span className="Button-inner">
                <span className="number">운동장</span>
                <span className="text">총동연</span>
              </span>
            </button>
          ) : (
            <></>
          )}
        </a>
        {isMobile || isDesktop ? (
          <Fade bottom duration={1500} delay={500} distance="30px">
            <Image
              src={isDesktop ? imageMap : imageMapMobile}
              id="mainImage"
              fluid
            />
          </Fade>
        ) : (
          <></>
        )}
        <Jump duration={1000} delay={3500}>
          <Fade duration={1500} delay={500}>
            <Image src={banner} id="banner" fluid />
          </Fade>
        </Jump>
        <Fade
          top
          duration={2000}
          delay={1000}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={religion} id="religion" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={social} id="social" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1800}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={art} id="art" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={2200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={exhibition} id="exhibition" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={2000}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={study} id="study" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1600}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={volunteer} id="volunteer" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={sports} id="sports" fluid></Image>
        </Fade>
        <Image src={religion_b} id="religionHover" fluid></Image>
        <Image src={exhibition_b} id="exhibitionHover" fluid></Image>
        <Image src={study_b} id="studyHover" fluid></Image>
        <Image src={sports_b} id="sportsHover" fluid></Image>
        <Image src={social_b} id="socialHover" fluid></Image>
        <Image src={art_b} id="artHover" fluid></Image>
        <Image src={volunteer_b} id="volunteerHover" fluid></Image>
      </div>
    </>
  );
};

export default Main;
