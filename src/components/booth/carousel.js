import Carousel from "react-bootstrap/Carousel";
import React, { useContext, useEffect, useState } from "react";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import Modal from "@material-ui/core/Modal";
import Image from "react-bootstrap/Image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    pcGridList: {
      width: "auto",
      height: "auto",
      transform: "translateZ(0)",
    },
    // title: {
    //   color: theme.palette.primary.light,
    // },
    // titleBar: {
    //   background:
    //     "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    // },
    modalDiv: {
      display: "flex",
      justifyContent: "center",
    },

    modalImgMobile: {
      position: "absolute",
      top: "30vh",
      // height: "80vh",
      width: "80vw",
    },
    modalImgPC: {
      position: "absolute",
      top: "10vh",
      height: "80vh",
      // width: "80vw",
    },
  })
);
export const ShowingGridList = ({ urls }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleOpen = (e) => {
    setTargetUrl(e.target.src);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, [targetUrl]);

  return isMobile ? (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {urls.map((url, i) => (
          <GridListTile key={i}>
            <img src={url} alt={url} onClick={handleOpen} />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {/* <img src={url} alt={url} className={classes.modalImg} /> */}
              {/* style={modalStyle} */}
              <div className={classes.modalDiv}>
                <img
                  src={targetUrl}
                  alt={url}
                  className={
                    isMobile ? classes.modalImgMobile : classes.modalImgPC
                  }
                />
              </div>
            </Modal>
            {/* <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            /> */}
          </GridListTile>
        ))}
      </GridList>
    </div>
  ) : (
    <div className={classes.root}>
      <GridList cellHeight="auto" className={classes.pcGridList}>
        <GridListTile
          key="Subheader"
          cols={2}
          style={{ height: "auto" }}
        ></GridListTile>
        {urls.map((url, i) => (
          <GridListTile key={i}>
            <Image src={url} alt={url} onClick={handleOpen} fluid />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {/* <img src={url} alt={url} className={classes.modalImg} /> */}
              {/* style={modalStyle} */}
              <div className={classes.modalDiv}>
                <img
                  src={targetUrl}
                  alt={url}
                  className={
                    isMobile ? classes.modalImgMobile : classes.modalImgPC
                  }
                />
              </div>
            </Modal>
            {/* <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            /> */}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export const ShowimgCarosel = ({ urls, height }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleOpen = (e) => {
    setTargetUrl(e.target.src);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, [targetUrl]);
  return (
    <>
      <Carousel>
        {urls.map((url, i) => {
          return (
            <Carousel.Item key={i}>
              <div style={{ height: "40vh" }}>
                <img
                  className="d-block w-100"
                  src={url}
                  // height={height}
                  alt="First slide"
                  onClick={handleOpen}
                />
                <Carousel.Caption></Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {/* <img src={url} alt={url} className={classes.modalImg} /> */}
        {/* style={modalStyle} */}
        <div className={classes.modalDiv}>
          <img
            src={targetUrl}
            alt={targetUrl}
            className={isMobile ? classes.modalImgMobile : classes.modalImgPC}
          />
        </div>
      </Modal>
    </>
  );
};
