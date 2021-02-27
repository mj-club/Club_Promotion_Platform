import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Page/Main";
// import Booth from "Page/Booth";
import Test from "Page/Test";
import Sub from "Page/Sub";
import FileUpload from "Page/FileUpload";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        {/* <Route exact path="/booth" component={Booth}></Route> */}
        <Route exact path="/booth/:department" component={Sub}></Route>
        <Route
          path="/booth/:department/:club"
          // render={() => <Sub sectoion={data} />}
          component={Sub}
        ></Route>
        <Route path="/test" component={Test}></Route>
        <Route path="/fileup" component={FileUpload}></Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
