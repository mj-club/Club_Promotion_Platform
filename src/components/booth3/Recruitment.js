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
    wordWrap: "break-word",
  },
  paper: {
    minHeight: "100vh",
  },
});
const Recruitment = ({ content }) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.paper}>
      <div className={classes.title}>신입생 모집 안내</div>
      <div className={classes.content}>
        {content.map((line, i) => (
          <span key={i}>
            <span>{line}</span> <br />
          </span>
        ))}
      </div>
    </Paper>
  );
};

export default Recruitment;
