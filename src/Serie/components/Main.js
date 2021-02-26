import React from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../Pages/TVSeries";
import SingleSeries from "../SingleSeries";

const Main = (props) => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/tvseries/:id" component={SingleSeries} />
  </Switch>
);

export default Main;
