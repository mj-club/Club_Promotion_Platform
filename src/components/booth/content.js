import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import Title from "components/booth/title";
import Tv from "../../img/screen.jpg";
import Image from "react-bootstrap/Image";
import ReactPlayer from "react-player";
import TvController from "../../img/tv_controller.png"
import TvControllerMobile from "../../img/tv_controller_m.png"
import off from "../../img/off.png"



const Content = () => {
  const { clubObj, contentVideo } = useContext(PortfolioContext);
  const recruitment = clubObj.recruitment;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [channel, setChannel] = useState(0);
  const [playing, setPlaying] = useState(false);
  const handleOff = ()=>{
    // const target = document.getElementById("off");
    if (playing){
      setPlaying(false)
      // target.style.zIndex = 4
    }else {
      setPlaying(true)
      // target.style.zIndex = 2
    }
    // if(target.style.zIndex == "") {
    //   target.style.zIndex = 2
    // }
    // console.log(target.style.zIndex)
    // if(target.style.zIndex == 2) {
      
    // }else {
      
    // }
  }

  const handleNext = ()=> {
    let value = channel+1
    if(value >= contentVideo.length) {
      value = 0
    }
    setChannel(value)
  }
  const handlePrev = ()=> {
    let value = channel-1
    if(value < 0) {
      value = contentVideo.length-1
    }
    setChannel(value)
  }
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    console.log(document.getElementById("player"))
    console.log(contentVideo.length)
  }, []);

  return  (
    <section id="content">
      <Container fluid={isMobile} className="contentContainer">
        <Title title="동아리 영상" />
        <Row id="contentRow">
        <Col lg={9} className="contentContainer">
          <div className="content-wrapper tv-div"> 
          {/* <div className="overlap"> */} 
          <Image src={Tv} id="tv"></Image>
          {/* <Image src={off} id="off"></Image> */}
          {/* </div> */}
          <ReactPlayer
            id="player"
            url={contentVideo[channel]}
            controls={true}
            playing={playing}
            // width={isDesktop ? "67%" : "75%"}
            width={isDesktop ? "81%" : "85%"}
            // height={isDesktop ? "57.5%" : "33.4%"}
            height={isDesktop ? "71.5%" : "62.7%"}
          /> 
      
          </div>
          </Col>
        <Col lg={3} className="contentContainer">
          <div className="content-wrapper controller-div">
          <div id="show-channel" className="control-btn" >{parseInt(channel)+1}</div>
          <div id="off-btn" className="control-btn" onClick={handleOff}></div>
          <div id="next-btn" className="control-btn" onClick={handleNext}></div>
          <div id="prev-btn" className="control-btn" onClick={handlePrev}></div>
          <Image src={isDesktop ? TvController : TvControllerMobile} id="tv-controller" />
          </div>
          </Col>
        </Row>
        {/* <Test></Test> */}
      </Container>
      
    </section>
  ) 
};

export default Content;
