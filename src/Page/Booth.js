import { Box, setRef } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { dbService, storageService } from "fbase";
import Introduction from "../components/Introduction";
import ContactUs from "../components/ContactUs";
import Layout from "../components/Layout.js";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Recruitment from "components/Recruitment";

const useStyles = makeStyles((theme) => ({
  tabs: {
    padding: theme.spacing(0),
    margin: theme.spacing(1),
    borderRadius: "10px",
    fontSize: "12px",
    minHeight: "24px",
  },
  activeTabs: {
    padding: theme.spacing(0),
    margin: theme.spacing(1),
    borderRadius: "10px",
    backgroundColor: "orange",
    color: "white",
    fontSize: "12px",
    minHeight: "24px",
  },
  indicator: {
    display: "none",
  },
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
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
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
      <Layout />
      {/* nav 모바일 pc 고려 */}
      <Grid container id="tab">
        <Tabs
          value={value}
          classes={{
            indicator: classes.indicator,
          }}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            component="a"
            className={value === 0 ? classes.activeTabs : classes.tabs}
            label="동아리 전시"
            {...a11yProps(0)}
          />
          <Tab
            className={value === 1 ? classes.activeTabs : classes.tabs}
            label="동아리 소개"
            {...a11yProps(1)}
          />
          <Tab
            className={value === 2 ? classes.activeTabs : classes.tabs}
            label="신입회원 모집 안내"
            {...a11yProps(2)}
          />
          <Tab
            className={value === 3 ? classes.activeTabs : classes.tabs}
            label="가입 문의"
            {...a11yProps(3)}
          />
        </Tabs>
      </Grid>
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
        {clubObj !== undefined ? (
          <Recruitment content={clubObj.recruitment} />
        ) : (
          <></>
        )}
      </Grid>
      {/* 홍보 이미지 캐러셀 (슬릭 고려) */}
      <Grid container id="poster">
        {urls.map((url, i) => {
          return <img key={i} src={url} alt={url} width="100px" />;
        })}
      </Grid>
      {/* 문의창구 아이콘 형식 */}
      <Grid container id="contact_us">
        {clubObj !== undefined ? (
          <ContactUs contactus={clubObj.contact_us} />
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

export default BoothPage;
