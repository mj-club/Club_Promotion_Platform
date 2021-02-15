import React, { useEffect, useState } from "react";
import { Paper, makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import ChatIcon from "@material-ui/icons/Chat";
const useStyles = makeStyles({
  box: {
    display: "flex",
    backgroundColor: "#1976d2",
    color: "white",
    width: "100%",
    padding: "2%",
  },
  text: {},
});
const ContactUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      Contact Us
      <FacebookIcon />
      <InstagramIcon />
      <ChatIcon />
    </div>
  );
};

export default ContactUs;
