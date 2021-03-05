import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Button} from '@material-ui/core'
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
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom  >
        차원의 도서관
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <div>
          차원의 도서관에는 여러 숨겨진 보물과 유물에 대해 연구하는 학자들이 많지!!<br />
          고대 유물에 대한 서적은 대부분 영어로 적혀있네<br />
          도서관에서 영어 학술 동아리를 알아보게!!
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstAnswer"
            name="firstAnswer"
            label="동아리 이름"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Button
          variant="contained"
          color="primary"
          // onClick={handleNext}
          className={classes.button}
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
  );
}