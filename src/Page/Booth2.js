import { Box, Button, setRef } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { dbService, storageService } from "fbase";
import Hero from "../components/booth/hero";
import { PortfolioProvider } from "../context/context";
import Introduce from "components/booth/introduce";
import Contact from "components/booth/contact";
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

// 임시;
// const sections = [
//   { title: "학술분과", url: "/" },
//   { title: "사회연구분과", url: "/" },
//   { title: "전시창작분과", url: "/" },
//   { title: "체육분과", url: "/" },
//   { title: "연행예술분과", url: "/" },
//   { title: "종교분과", url: "/" },
//   { title: "봉사분과", url: "/" },
// ];

const useStyles = makeStyles((theme) => ({}));
// const loadImg = async (club) => {
//   const urls = [];
//   const arr = await storageService.ref().child("COA").listAll();

//   for (let i = 0; i < arr.items.length; i++) {
//     let url = await arr.items[i].getDownloadURL();
//     urls.push(url);
//   }
//   return urls;
// };
const loadFiles = async (clubName, fileType, clubObj={}) => {
  const urls = [];
  const arr = await storageService
    .ref()
    .child(clubName)
    .child(fileType)
    .listAll();

  for (let i = 0; i < arr.items.length; i++) {
    let url = await arr.items[i].getDownloadURL();
    urls.push(url);
  }
  if(clubObj.content_video) {
    for (const url of clubObj.content_video) {
      urls.push(url)
    }
  }
  return urls;
};
// const loading = async () => {
//   const clubsRef = dbService.collection("clubs").doc("COA");
//   let clubObj = await (await clubsRef.get()).data();
//   return clubObj;
// };
const loading = async (name, type) => {
  let ref;
  ref = dbService.collection(type).doc(name);
  let obj = await (await ref.get()).data();
  return obj;
};
const Booth = () => {
  const { match, departmentObj } = useContext(PortfolioContext);
  const { key } = departmentObj;
  const { name } = departmentObj;
  // const { name } = clubObj;
  const classes = useStyles();
  const [posters, setPosters] = useState([]);
  const [activities, setActivities] = useState([]);
  const [contentVideo, setContentVideo] = useState([]);
  const [contentPhoto, setContentPhoto] = useState([]);
  const [clubObj, setClubObj] = useState(undefined);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  let obj;
  let images;
  let activityTemp;
  let contentVideoTemp;
  let contentPhotoTemp;
  useEffect(async () => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    obj = await loading(match.params.club, "clubs");
    if (clubObj === undefined || clubObj.name !== obj.name) {
      setClubObj(obj);
    }
    images = await loadFiles(match.params.club, "poster");
    if (posters === undefined || posters[0] !== images[0]) {
      setPosters(images);
    }
    activityTemp = await loadFiles(match.params.club, "activity");
    if(activities !== undefined) { 
      if (activities === [] || activities[0] !== activityTemp[0]) {
        setActivities(activityTemp);
      }
    }
    contentVideoTemp = await loadFiles(match.params.club, "content_video", clubObj);
    if(contentVideo !== undefined) {
      if (contentVideo === [] || contentVideo[0] !== contentVideoTemp[0]) {
        setContentVideo(contentVideoTemp);
      }
    }
    contentPhotoTemp = await loadFiles(match.params.club, "content_photo");
    if(contentPhoto !== undefined) {
      if (contentPhoto === [] || contentPhoto[0] !== contentPhotoTemp[0]) {
        setContentPhoto(contentPhotoTemp)
      }
    }
  });

  return clubObj !== undefined ? (
    <PortfolioProvider value={{ clubObj, posters, activities, contentVideo, contentPhoto, key, name }}>
      <Hero />
      <Introduce />
      {contentVideo.length !== 0  ?<Content />: <></>}
      {/* <Photozone /> */}
      {contentPhoto.length !== 0 ? 
      (isMobile ? <Slidemobile /> : <Slidezone />)
      :
      <></>}
      {clubObj.recruitment !== undefined ?<Projects />:<></>}
      {clubObj.how_to_join !== undefined ?<Contact />:<></>}
      <Footer />
    </PortfolioProvider>
  ) : (
    <></>
  );
};

export default Booth;
