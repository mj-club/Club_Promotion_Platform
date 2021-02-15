import { Box, setRef } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { dbService, storageService } from "fbase";
import Introduction from "./Introduction";
import ContactUs from "./ContactUs";

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

const BoothPage = () => {
  const [urls, setUrls] = useState([]);
  const [clubObj, setClubObj] = useState(undefined);
  useEffect(async () => {
    const obj = await loading();
    const images = await loadImg();
    console.log(obj);
    setClubObj(obj);
    setUrls(images);
  }, []);

  return (
    <Grid container>
      {/*동아리 간단 소개 고정화면*/}
      <Grid container id="fixedInfo">
        <div></div>
      </Grid>
      {/* nav 모바일 pc 고려 */}
      {/* <Grid container id="nav">
        <Grid>
          <AppBar position="static">
            <Tabs
              // orientation="vertical"
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
        </Grid>
      </Grid> */}
      {/* 1단계 테마에 맞는 전시관 */}
      <Grid container id="show">
        <div>단계 테마에 맞는 전시관</div>
      </Grid>
      {/* 2단계  동아리 소개 전문 */}
      <Grid container id="introduction">
        {clubObj !== undefined ? (
          <Introduction content={clubObj.introduction} />
        ) : (
          <></>
        )}
      </Grid>
      {/* 활동 계획 */}
      <Grid container id="plan">
        <div>활동 계획</div>
      </Grid>
      {/* 3단계 신입생 모집 안내 */}
      <Grid container id="recruitment">
        <div>3단계 신입생 모집 안내</div>
      </Grid>
      {/* 홍보 이미지 캐러셀 (슬릭 고려) */}
      <Grid container id="poster">
        {urls.map((url, i) => {
          return <img key={i} src={url} alt={url} width="100px" />;
        })}
      </Grid>
      {/* 문의창구 아이콘 형식 */}
      <Grid container id="contact_us">
        <ContactUs />
      </Grid>
    </Grid>
  );
};

export default BoothPage;
