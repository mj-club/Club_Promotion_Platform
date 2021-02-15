import React, { useEffect, useState } from "react";
import { Paper, makeStyles } from "@material-ui/core";

// A style sheet
const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    padding: "2%",
  }, // a nested style rule
  content: {
    // textAlign: "center",
    padding: "2%",
  }, // a style rule
});
const Introduction = ({ content }) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.title}>동아리 소개</div>
      <div className={classes.content}>{content}</div>
    </Paper>
  );
};

export default Introduction;
