import { Box, Button, setRef } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { dbService, storageService } from "fbase";

import { PortfolioProvider } from "../context/context";

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
const BoothPage = () => {
  const classes = useStyles();
  const [urls, setUrls] = useState([]);
  const [clubObj, setClubObj] = useState(undefined);
  useEffect(async () => {
    const obj = await loading();
    const images = await loadImg();
    console.log(obj);
    setClubObj(obj);
    setUrls(images);
  }, []);

  return clubObj !== undefined ? (
    <PortfolioProvider value={{ clubObj }}></PortfolioProvider>
  ) : (
    <></>
  );
};

export default BoothPage;
