import React, { useState, useEffect, useContext } from "react";
import PortfolioContext from "../../context/context";
import MenuIcon from "@material-ui/icons/Menu";
import {
  makeStyles,
  Drawer,
  Typography,
  Toolbar,
  AppBar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden,
  useTheme,
} from "@material-ui/core";
import mjuIcon from "img/mju.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  // toolbar: {
  //   justifyContent: "space-between",
  // },
  // pcToolbar: {
  //   justifyContent: "space-around",
  //   minHeight: "6vh",
  //   height: "6vh",
  //   paddingLeft: "10%",
  //   paddingRight: "10%",
  // },
  link: {
    color: "white",
    "&:hover": {
      color: "gray",
    },
    // fontSize:
  },
  logoInMob: {
    position: "absolute",
    left: "50%",
  },
}));

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     [theme.breakpoints.up('sm')]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   closeMenuButton: {
//     marginRight: 'auto',
//     marginLeft: 0,
//   },
// }));

const BoothBar = () => {
  const classes = useStyles();
  const { sections, departmentObj } = useContext(PortfolioContext);
  const { key } = departmentObj;
  const contains = sections.contains;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return isMobile ? (
    <AppBar position="relative" className={`header ${key}`}>
      <Toolbar id="topNav">
        <div
          className="icon-container"
          onClick={function () {
            const header = document.querySelector("header");
            header.classList.toggle("menu-open");
          }}
        >
          <div id="menuicon">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
          </div>
        </div>

        <IconButton href="/">
          <img src={mjuIcon} width="30px" className={classes.logoInMob}></img>
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          <Link
            // variant="body2"
            to={`/총동연`}
            className={classes.link}
          >
            명지대 총동연
          </Link>
        </Typography>
      </Toolbar>
      <div className="mobile-menu">
        <ul className="menu">
          {contains.map((section, i) => (
            <li className="menu-item" key={i}>
              <a href={`/booth/${section}`}>{section}</a>
            </li>
          ))}
        </ul>
      </div>
    </AppBar>
  ) : (
    <AppBar position="relative" className={`pcTopNav ${key}`} elevation={0}>
      <Toolbar id="pcTopNav">
        {/* <CameraIcon className={classes.icon} /> */}
        <IconButton href="/">
          <img src={mjuIcon} width="50px"></img>
        </IconButton>
        {contains.map((section, i) => (
          <Link
            key={i}
            // variant="body2"
            to={`/booth/${section}`}
            className={classes.link}
          >
            {section}
          </Link>
        ))}
        <Typography variant="h6" color="inherit" noWrap>
          <Link
            // variant="body2"
            to={`/총동연`}
            className={classes.link}
          >
            명지대 총동연
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default BoothBar;
