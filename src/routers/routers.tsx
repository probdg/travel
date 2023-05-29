import React from "react";
import { Route, Switch, useHistory, Redirect } from "./react-router-dom";
import Flight from "../pages/Flight/index";
import Home from "../App";

const Routes = () => {
  const notFound = () => {
    return <Redirect to={'/'} />
  }
  return (

  <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/flight" component={Flight} />
    </Switch>
  );    
}
export default Routes
