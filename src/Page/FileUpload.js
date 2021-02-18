import { Box, Button, setRef } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { dbService, storageService } from "fbase";
import Introduction from "../components/Introduction";
import ContactUs from "../components/ContactUs";
import Layout from "../components/Layout.js";
import Posts from "../components/Posts.js";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Recruitment from "components/Recruitment";

const FileUpload = ({ clubObj }) => {
  //test
  const mkArr = () => {
    const textArea = document.getElementById("upload");
    const lines = textArea.value.split("\n");
    console.log(lines.length);
    return lines;
  };
  const upload = async (lines) => {
    const state = await dbService.collection("clubs").doc("COA").update({
      recruitment: lines,
    });
  };
  const handleUpload = async () => {
    console.log(clubObj);
    const lines = mkArr();
    upload(lines);
  };
  return (
    <>
      <Grid container>
        <textarea rows="30" cols="300" id="upload"></textarea>
      </Grid>
      <Grid container>
        <Button
          type="button"
          fullWidth
          variant="contained"
          onClick={handleUpload}
        >
          등록
        </Button>
      </Grid>
    </>
  );
};
export default FileUpload;
