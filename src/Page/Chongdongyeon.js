import { Box, Button, setRef } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { dbService, storageService } from "fbase";
import Hero from "../components/booth/hero";
import { PortfolioProvider } from "../context/context";
import Introduce from "components/booth/introduce";
import CdyIntroduce from "components/chondongyeon/cdyIntoduce";
import Footer from "components/booth/footer";
import Projects from "components/booth/infomation";
import Content from "components/booth/content";
import Chapternav from "components/booth/chapterNav";
import Photozone from "components/booth/photoZone";
import Slidezone from "components/booth/slideZone";
import Slidemobile from "components/booth/slideMobile";
import Navbar from "react-bootstrap/Navbar";
import BoothBar from "components/booth/appBar";
import PortfolioContext from "context/context";
import TestBg from "img/testbg.jpeg"
import Image from "react-bootstrap/Image";


const Booth = () => {
  return(<PortfolioProvider value={{ }}>
      
      
     
    </PortfolioProvider>);
};

export default Booth;
