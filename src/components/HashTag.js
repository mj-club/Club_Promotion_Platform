import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  text: {
    backgroundColor: "white",
    fontSize: "2px",
  },
}));
export default function HashTag({ tag_name }) {
  const classes = useStyles();
  const label = `#${tag_name}`;
  return (
    <div className={classes.root}>
      <Chip className={classes.text} label={label} size="small" />
    </div>
  );
}
