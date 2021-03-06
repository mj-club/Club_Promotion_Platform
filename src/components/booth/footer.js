import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import PortfolioContext from "../../context/context";
import Title from "components/booth/title";
import { Typography } from "@material-ui/core";
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join(".");
}

function Copyright() {
  const date = new Date();
  return (
    <Typography variant="body2" style={{ color: "white" }}>
      {"Copyright © "}
      <Link
        style={{ color: "white" }}
        href="https://github.com/mj-club/Club_Promotion_Platform"
      >
        총동아리연합회 비상대책위원회
      </Link>{" "}
      {/* {` ${formatDate(date)}`} */}
    </Typography>
  );
}
const Footer = () => {
  // const { footer } = useContext(PortfolioContext);
  // const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <hr />
        <Row className="justify-content-md-center">
          <p>명지대학교 인문캠퍼스 총동아리연합회 비상대책위원회</p>
        </Row>
        <Row className="justify-content-md-center">
          <p
            className="footer__text"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* © {new Date().getFullYear()} - Template developed by{" "}
          <a
            href="https://github.com/cobidev"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            Developers: 비대상대책위원장 양성훈 | 기획재정국장 정동준 |
            복지정책국장 김휘준 <br></br>
            Desinger: 대외홍보국장 노현정<br></br>
            Copyright © 명지대학교 인문캠퍼스 총동아리연합회 비상대책위원회
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
