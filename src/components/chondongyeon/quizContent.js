import React, {useContext, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Button} from '@material-ui/core'
import PortfolioContext from '../../context/context';
import Title from "components/booth/title";
const useStyles = makeStyles((theme) => ({
  border: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    height: "50%"
  },
}))


export default function AddressForm() {
  const classes = useStyles();
  const { departmentObj } = useContext(PortfolioContext);
  const { quiz } = departmentObj;
  console.log(quiz)
  const [localAns , setLocalAns] = useState(JSON.parse(localStorage.getItem('quizAnswer')))
  console.log(localAns)
  const date = new Date()

  console.log(date.getMonth(), date.getDate())
  const [pass, setPass] = useState(quiz[0].a == localAns[0])
  const checkAnswer = (e)=>{
    const ans = document.getElementById("answer")
    const btn = document.getElementById("submitAnser")
    if(ans.value == quiz[0].a) {
      ans.readOnly = true
      ans.value = quiz[0].a
      ans.parentElement.style.backgroundColor =" rgba(0, 0, 0, 0.09)"
      btn.style.backgroundColor = "rgb(220, 0, 78)"
      btn.firstChild.innerText = "정답!"
      let arr = localAns
      arr[0] = quiz[0].a
      localStorage.setItem('quizAnswer',JSON.stringify(arr))
    }
  }
  useEffect(()=>{
    if(localAns === null) {
      const init = ['','','','','','','']
      localStorage.setItem('quizAnswer',JSON.stringify(init))
      setLocalAns(JSON.parse(localStorage.getItem('quizAnswer')))
    }
    // if (pass) {
    //   const ans = document.getElementById("answer")
    //   ans.value = quiz[0].a
    //   const btn = document.getElementById("submitAnser")
    //   btn.click()
    // }
  },[])
  return(
    <React.Fragment>
      <Typography variant="h6" gutterBottom  >
        차원의 도서관
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <div>
          {quiz[0].q.map((line)=>{return(<span><span>{line}</span><br></br></span>)})}
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="answer"
            name="answer"
            label="동아리 이름"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Button
          variant="contained"
          color="primary"
          // onClick={handleNext}
          id="submitAnser"
          className={classes.button}
          onClick={checkAnswer}
        >
                    입력
                  </Button>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  )
  // :(<Grid container style={{display:"flex", justifyContent:"center", textAlign : "center"}}><Title title="coming soon" /></Grid>);
}