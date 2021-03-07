import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { a } from "react-spring";
import PortfolioContext from "context/context";
import Photomobile from "./photoMobile";
import Title from "components/booth/title";

const Slidemobile = () => {
  let { clubObj } = useContext(PortfolioContext);
  return (
    <section id="sliderMobile">
      <Title title={`${clubObj.name} 전시관`} id="slideTitle" />
      <div id="sliderMobileRoot">
        <Photomobile />
      </div>
    </section>
  );
};
export default Slidemobile;
