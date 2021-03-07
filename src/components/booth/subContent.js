import React, { useContext, useState, useEffect,  } from "react";
import { Container, Col,Image } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import PortfolioContext from "../../context/context";
import Navbar from "react-bootstrap/Navbar";
import pink from "img/pink.png"
import purple from "img/purple.png"
import yellowgreen from "img/yellowgreen.png"
import mint from "img/mint.png"
import red from "img/red.png"
import blue from "img/blue.png"
import orange from "img/orange.png"
const search = {
  pink: pink,
  purple: purple,
  yellowgreen: yellowgreen,
  mint: mint,
  red: red,
  blue: blue,
  orange: orange,
  
};

const useStyles = makeStyles({
  charactorDiv: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",

  }
});
const SubContent = () => {
  const classes = useStyles()
  const { departmentObj } = useContext(PortfolioContext);
  const { name, brief_introduction, key, contains, id, hashtag, information, charactor } = departmentObj;

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
    <section id="hero" className="jumbotron">
      {departmentObj && (
        <Container fluid>
          
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={500}
            distance="30px"
          >
            <h1 className="hero-title">
              <span className={`text-color-main ${key}`}>
                {departmentObj.name}
              </span>
              <br />
              {/* {brief_introduction} */}
              {/* <span className="brief">저는 열정있는 개발자입니다.</span> */}
              <span className="brief">{departmentObj.brief_introduction}</span>
            </h1>
          </Fade>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={1000}
            distance="30px"
          >
            {contains.map((contain) => {
              const url = `/booth/${id}/${contain.key}`;
              return (
                <a
                  rel="noopener noreferrer"
                  className={`cta-btn text-color-main ${key} hashtag`}
                  href={url}
                  key={url}
                >
                  {"#"}
                  {contain.name}
                </a>
              );
            })}
            {hashtag ? hashtag.map((tag) => {
              return (
              <a
                rel="noopener noreferrer"
                target="_blank"
                className={`cta-btn text-color-main ${key} hashtag`}
                href={tag.key}
                key={tag.key}
              >
                {"#"}
                {tag.name}
            </a>
              )
            }) : <></>
            } 

            {/* <p className="hero-cta">
              <span className={`cta-btn cta-btn--hero ${key}`}>
                <Link to="about" smooth duration={1000}>
                  {"더 알아보기"}
                </Link>
              </span>
            </p> */}
          </Fade>
          {/* <Fade
            right={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={1000}
            distance="30px"
          ><div className={classes.charactorDiv}><Image src={search[charactor]}></Image></div></Fade> */}
          <div id="caution">※{information}</div>
        </Container>
      )}
    </section>
  );
};
export default SubContent;
