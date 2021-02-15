import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

// A style sheet
const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    padding: "2%",
  }, // a nested style rule
  content: {
    padding: "2%",
  },
  paper: {
    width: "100%",
  },
});
const Recruitment = ({ content }) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.title}>신입생 모집 안내</div>
      <div className={classes.content}>{content}</div>
    </Paper>
  );
};

export default Recruitment;
