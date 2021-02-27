import { Box, Button, setRef } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { dbService, storageService } from "fbase";
import Hero from "../components/booth/hero";
import { PortfolioProvider } from "../context/context";
import Introduce from "components/booth/introduce";
import Contact from "components/booth/contact";
import Footer from "components/booth/footer";
import Projects from "components/booth/infomation";
import Chapternav from "components/booth/chapterNav";
import Navbar from "react-bootstrap/Navbar";
import BoothBar from "components/booth/appBar";

//임시
const sections = [
  { title: "학술분과", url: "/" },
  { title: "사회연구분과", url: "/" },
  { title: "전시창작분과", url: "/" },
  { title: "체육분과", url: "/" },
  { title: "연행예술분과", url: "/" },
  { title: "종교분과", url: "/" },
  { title: "봉사분과", url: "/" },
];

const useStyles = makeStyles((theme) => ({}));
const loadImg = async () => {
  const urls = [];
  const arr = await storageService.ref().child("COA").listAll();

  for (let i = 0; i < arr.items.length; i++) {
    let url = await arr.items[i].getDownloadURL();
    urls.push(url);
  }
  return urls;
};

const loading = async () => {
  const clubsRef = dbService.collection("clubs").doc("COA");
  let clubObj = await (await clubsRef.get()).data();
  return clubObj;
};
const Booth = ({ match }) => {
  console.log(match.params);
  const classes = useStyles();
  const [urls, setUrls] = useState([]);
  const [clubObj, setClubObj] = useState(undefined);
  let obj;
  let images;
  useEffect(async () => {
    obj = await loading();
    if (clubObj === undefined || clubObj !== obj) {
      setClubObj(obj);
      console.log(obj);
    }
    images = await loadImg();
    if (urls === undefined || urls !== images) {
      setUrls(images);
    }
  });

  return clubObj !== undefined ? (
    <PortfolioProvider value={{ clubObj, urls }}>
      <BoothBar sections={sections} />
      <Chapternav />
      <Hero />
      <Introduce />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  ) : (
    <></>
  );
};

export default Booth;
