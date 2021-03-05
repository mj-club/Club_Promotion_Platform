import { Box, setRef } from "@material-ui/core";
import Button from 'react-bootstrap/Button'
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
import chondongyeon from "../img/chongdongyeon.png"
import art_b from "../img/art_b.png";
import social_b from "../img/social_b.png";
import religion_b from "../img/religion_b.png";
import sports_b from "../img/sports_b.png";
import study_b from "../img/study_b.png";
import volunteer_b from "../img/volunteer_b.png";
import exhibition_b from "../img/exhibition_b.png";
import chondongyeon_b from "../img/chongdongyeon.png"
import art_btn from "../img/art_btn.png";
import social_btn from "../img/social_btn.png";
import religion_btn from "../img/religion_btn.png";
import sports_btn from "../img/sports_btn.png";
import study_btn from "../img/study_btn.png";
import volunteer_btn from "../img/volunteer_btn.png";
import exhibition_btn from "../img/exhibition_btn.png";
import chongdongyeon_btn from "../img/chongdongyeon_btn.png"
import TextField from '@material-ui/core/TextField';

import popup1 from "../img/popup_1.jpeg"
import popup2 from "../img/popup_2.jpeg"
import popup3 from "../img/popup_3.jpeg"
import popup4 from "../img/popup_4.jpeg"
import Image from "react-bootstrap/Image";
import Fade from "react-reveal/Fade";
// import artImg from "../img/art.jpg";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import banner from "../img/banner.png";
import banner_m from "../img/banner_m.png"
import Jump from "react-reveal/Jump";
import Modal from 'react-bootstrap/Modal'
import TypeWriter from 'react-typewriter';

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
  nonVisible: {
    visibility: "hidden"
  },

}));
const Main = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [popupIdx, setPopupIdx] = useState(0);
  const [userName, setUserName] = useState(undefined);
  const [helperText, setHelperText] = useState("");
  const popupImage = [popup1, popup2, popup3, popup4];
  const popupText1 = ["", "뭐야 이 애송이는?", " 들어본 적도 없는 트레져헌터군. 풉 트레져헌터는 아무나 하는게 아니야~ 혼자서는 찾긴 어려울텐데 혹시 나에게 배워서 같이 찾아보겠나?", "너에게 단서 7개를 줄테니 한번 찾아와봐! 찾아온다면 나랑 같이 찾을 자격을 주도록 하지"];
  const popupText2 = ["", "내.. 내이름은 ", "...ㅈ...좋다...! 어떻게 하면 되는거지?", "좋았어!! 출발!!!!"];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInputName = () => {
    if ( window.event.keyCode == 13 ) {
      const a = document.getElementById("nameInput");
      let ment = document.getElementById("ment2");
      console.dir(ment)
      localStorage.setItem('mju_name', a.value);
      setUserName(a.value)
  }
  }
  const handleNext= (event) => {
    if (popupIdx == 1 & userName === undefined) {
      const a = document.getElementById("nameInput");
      if (a.value == ""){
        setHelperText("이름을 입력해주세요!")
      } else {
        localStorage.setItem('mju_name', a.value);
        setUserName(a.value)
      }
      return
    }
    setPopupIdx((popupIdx+1) % 4);
  }
  const handlePrev= () => {
    setPopupIdx((popupIdx-1) % 4);
  }
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    if (!localStorage.getItem('mju_name')) {
      setTimeout(handleShow, 5000)
    }
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      const linkName = link.id.slice(0, link.id.indexOf("Link"));
      // console.log(linkName);
      link.addEventListener("mouseover", (e) => {
        // const target = document.getElementById(linkName)
        // target.src = search[`${linkName}_b`]
        const target = document.getElementById(`${linkName}Hover`);
        target.style.visibility = "visible";
        const btn = document.getElementById(`${linkName}-btn`)
        btn.style.visibility = "visible";
      });
      link.addEventListener("mouseout", (e) => {
        const target = document.getElementById(`${linkName}Hover`);
        target.style.visibility = "hidden";
        const btn = document.getElementById(`${linkName}-btn`)
        btn.style.visibility = "hidden";
      });
    });
    if(isLoading) {
      setIsLoading(false)
    }
  }, [isLoading]);
  const classes = useStyles();
  // isLoading ? <><img src={isDesktop? imageMap: imageMapMobile} className={classes.nonVisible}></img></> : 
  return isLoading ? <><img src={isDesktop? imageMap: imageMapMobile} className={classes.nonVisible}></img></> : (
    <>
    <Modal id="tutorial" show={show} onHide={handleClose} animation={true} autoFocus={false}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={popupImage[popupIdx]} fluid /></Modal.Body>
          <div id="text1">
          <span className={`ment${popupIdx}`} id="ment1">
            {userName && popupIdx == 2 ? <span className="userName">
            {userName}?
          </span> : <></>}
          { popupIdx == 1 ?
          <TypeWriter typing={0.7}>
            {popupText1[1]}
            </TypeWriter> : <></>
          }
          { popupIdx == 2 ?
          <TypeWriter typing={1}>
            {popupText1[2]}
            </TypeWriter> : <></>
          }
          { popupIdx == 3 ?
          <TypeWriter typing={1}>
            {popupText1[3]}
            </TypeWriter> : <></>
          }
            </span>
          </div>
          <div id="text2">
          <span className={`ment${popupIdx}`} id="ment2">
          {popupText2[popupIdx]}
          {/* <span className={`ment${2}`} id="ment2"><TypeWriter typing={1}>{popupText2[popupIdx]}</TypeWriter> */}
          {/* <span className={`ment${3}`} id="ment2"><TypeWriter typing={1}>{popupText2[popupIdx]}</TypeWriter> */}
          {userName === undefined && popupIdx == 1 ?
            <TextField error={helperText == "" ? false : true} id="nameInput" label="내 이름은?" size="small" variant="outlined" onKeyPress={handleInputName} helperText={helperText} />
            // (isDesktop ? <Button>제출</Button> : <></> )
          :
          (popupIdx == 1 ?
          <Fade
          top
          duration={500}
          distance={"20px"}
        >
          <span className="userName">
            {userName}이다!
          </span>
        </Fade> : <></>
          )
          }
          </span>
          </div>
        <Modal.Footer>
          { popupIdx != 0 ?
          <Button variant="secondary" onClick={handlePrev}>
            prev
          </Button> : <></>}
          { popupIdx != 3 ?
          <Button variant="primary" onClick={handleNext}>
            Next
          </Button> : <Button variant="primary" onClick={handleClose}>GoGo</Button>
          }
        </Modal.Footer>
      </Modal>
      <div id="mapContainer">
        <Fade
          right
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
        <a id="socialLink" href="/booth/사회연구" className="link">
          {/* {isMobile ? ( */}
            <Image src={social_btn} id="social-btn" className="mobile-btn" />
          {/* ) : (
            <></>
          )} */}
        </a>
        </Fade>
        <Fade
          left
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
        <a id="religionLink" href="/booth/종교" className="link">
          {/* {isMobile ? ( */}
            <Image src={religion_btn} id="religion-btn" className="mobile-btn" />
          {/* ) : (
            <></>
          )} */}
        </a>
        </Fade>
        <Fade
          left
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
        <a id="artLink" href="/booth/연행예술" className="link">
          {/* {isMobile ? ( */}
            <Image src={art_btn} id="art-btn" className="mobile-btn" />
          {/* ) : (
            <></>
          )} */}
        </a>
        </Fade>
        <Fade
          right
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
        <a id="exhibitionLink" href="/booth/전시창작" className="link">
          {/* {isMobile ? ( */}
            <Image src={exhibition_btn} id="exhibition-btn" className="mobile-btn" />
          {/* ) : (
            <></>
          )} */}
        </a>
        </Fade>
        <Fade
          left
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
        <a id="studyLink" href="/booth/학술" className="link">
          {/* {isMobile ? ( */}
            <Image src={study_btn} id="study-btn" className="mobile-btn" />
          {/* ) : (
            <></>
          )} */}
        </a>
        </Fade>
        <Fade
          right
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
        <a id="volunteerLink" href="/booth/봉사" className="link">
          {/* {isMobile ? ( */}
            <Image src={volunteer_btn} id="volunteer-btn" className="mobile-btn" />
          {/* ) : (
            <></>
          )} */}
        </a>
        </Fade>
        <Fade
          left
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
        <a id="sportsLink" href="/booth/체육" className="link">
          {/* {isMobile ? ( */}
            <Image src={sports_btn} id="sports-btn" className="mobile-btn" />
          {/* ) : (
            <></>
          )} */}
        </a>
        </Fade>
        <Fade
          right
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
        <a id="chongdonyeonLink" href="/총동연" className="link">
          {/* {isMobile ? ( */}
            <Image src={chongdongyeon_btn} id="chongdongyeon-btn" className="mobile-btn" />
          {/* ) : (
            <></>
          )} */}
        </a>
        </Fade>
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
            <Image src={isDesktop ? banner : banner_m} id="banner" fluid />
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
        <Fade
          top
          duration={2000}
          delay={1200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={chondongyeon} id="chondongyeon" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1000}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={religion_b} id="religionHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={2200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={exhibition_b} id="exhibitionHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={2000}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={study_b} id="studyHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1200}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={sports_b} id="sportsHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1400}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={social_b} id="socialHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1800}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={art_b} id="artHover" fluid></Image>
        </Fade>
        <Fade
          top
          duration={2000}
          delay={1600}
          distance={isMobile ? "20px" : "50px"}
        >
          <Image src={volunteer_b} id="volunteerHover" fluid></Image>
        </Fade>
      </div>
    </>
  );
};

export default Main;
