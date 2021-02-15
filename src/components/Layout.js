import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HashTag from "../components/HashTag";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontSize: "14px"
  },
  subtitle: {
    fontSize: "12px"
  },
  menuButton: {
    padding: theme.spacing(0)
  },
  toolbar: {
    paddingTop: theme.spacing(2),
    minHeight: 64,
    alignItems: "flex-start",
    flexDirection: "column"
  },
  flex: {
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(0.5)
  },
  // tabs: {
  //   backgroundColor: "white",
  //   display: "flex",
  //   alignItems: "center",
  //   paddingBottom: theme.spacing(0.5)
  // }
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Layout() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.flex}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              공공혁신조달
            </Typography>
          </div>
          <div className={classes.flex}>
            <Typography variant="h6" className={classes.subtitle}>
                국민이 만든 혁식, 정부가 먼저 구매합니다.
            </Typography>
          </div>
          <div className={classes.flex}>
            <HashTag />
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}