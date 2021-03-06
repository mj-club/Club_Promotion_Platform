import React, { useEffect, useState,  } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Modal from 'react-bootstrap/Modal'
import completeCard from "../../img/complete_card.jpeg";
import Image from "react-bootstrap/Image";

// import Button from 'react-bootstrap/Button';
import QuizContent from './quizContent';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center" >
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}

//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    zIndex: "5"
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  border: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  }
}));

const steps = ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Stage 5', 'Stage 6', 'Stage 7'];

function getStepContent(step) {
  console.log(step)
  // switch (step) {
  //   case 0:
  //     return <QuizContent idx={0}/>;
  //   case 1:
  //     return <QuizContent idx={1}/>;
  //   case 2:
  //     return <QuizContent idx={2}/>;
  //   case 3:
  //     return <QuizContent idx={3}/>;
  //   case 4:
  //     return <QuizContent idx={4}/>;
  //   case 5:
  //     return <QuizContent idx={5}/>;
  //   case 6:
  //     return <QuizContent idx={6}/>;
  //   default:
  //     throw new Error('Unknown step');
  // }
  return <QuizContent idx={step}/>;
}

function Test() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('mju_name'));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  useEffect(()=>{
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  })
  return (
    <React.Fragment>
      <CssBaseline />
        <Modal
            show={show}
            onHide={handleClose}
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Image src={completeCard} fluid />
            <div id="completeCard">
            <span id="completeCardMent">
              {userName}
              </span>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
      <main className={classes.layout}>
        <Paper className={classes.paper} >
          {/* <Typography component="h1" variant="h4" align="center" >
            퀘스트
          </Typography> */}
          { isDesktop ? <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> : <></>}
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Button onClick={handleShow} className={classes.button}>
                      수료증 발급
                  </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {/* {activeStep !== undefined ? <QuizContent idx={activeStep} /> : <></>} */}
                <QuizContent idx={activeStep} /> 
                {isMobile ? (<><br></br><br></br><MobileStepper
      variant="dots"
      steps={8}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 8}>
          {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    /></>):
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
                  </Button>
                </div>}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
      </main>
    </React.Fragment>
  );
}
export default Test;