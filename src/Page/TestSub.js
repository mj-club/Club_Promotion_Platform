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
import SubContent from "components/booth/subContent";
import Booth from "Page/Chongdongyeon";
import TestBg from "img/testbg.jpeg"
import Image from "react-bootstrap/Image";
import CdyIntoduce from "components/chondongyeon/cdyIntoduce";
import CdyHero from "components/chondongyeon/cdyHero";
import CdyGuide from "components/chondongyeon/cdyGuide";
import EventAnnounce from "components/chondongyeon/eventAnnounce";
import Quiz from "components/chondongyeon/quiz"
// const sections = [
//   { title: "학술분과", url: "/" },
//   { title: "사회연구분과", url: "/" },
//   { title: "전시창작분과", url: "/" },
//   { title: "체육분과", url: "/" },
//   { title: "연행예술분과", url: "/" },
//   { title: "종교분과", url: "/" },
//   { title: "봉사분과", url: "/" },
// ];

const useStyles = makeStyles((theme) => ({
  testbg: {
    backgroundImage: TestBg,
  }
}));
// const loadImg = async () => {
//   const urls = [];
//   const arr = await storageService.ref().child("COA").listAll();

//   for (let i = 0; i < arr.items.length; i++) {
//     let url = await arr.items[i].getDownloadURL();
//     urls.push(url);
//   }
//   return urls;
// };

const loading = async (name, type) => {
  let ref;
  ref = dbService.collection(type).doc(name);
  let obj = await (await ref.get()).data();
  return obj;
};
const Sub = ({ match }) => {
  const classes = useStyles();
  // const departmentName = match.params.department;
  // const clubName = match.params.club;
  // console.log(match.params);
  const [sections, setSections] = useState(undefined);
  const [departmentObj, setDepartmentObj] = useState(undefined);
  const [clubObj, setClubObj] = useState(undefined);
  const [loaded, setLoaded] = useState(false);
  let sectionTemp;
  let departmentTemp;
  useEffect(async () => {
    sectionTemp = await loading("all", "departments");
    // console.log(sections);
    // console.log(sectionTemp);
    if (sections === undefined || sections.id != sectionTemp.id) {
      setSections(sectionTemp);
      // console.log(sectionTemp);
    }
    departmentTemp = await loading("총동연", "departments");
    // console.log(departmentTemp)
    if (departmentObj === undefined || departmentObj.id != departmentTemp.id) {
      setDepartmentObj(departmentTemp);
    }
    
  });

  return departmentObj !== undefined ? (
    <>

    <PortfolioProvider value={{ sections, departmentObj, match }}>
      <Image src={TestBg} style={{position: "fixed",width: "100%", height: "100vh", opacity: "0.5", zIndex: "0"}}/>
      <BoothBar />
      <CdyHero />
      <CdyGuide />
      <EventAnnounce />
      <Quiz />
      <CdyIntoduce />
      <Footer />
    </PortfolioProvider>
</>
  ) : (
    <></>
  );
};

export default Sub;
