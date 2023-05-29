import * as React from "react";
import {Route, BrowserRouter as Router,Switch} from "react-router-dom";
import Login from "./pages/login/index";
import Flight from "./pages/flight/index";

const App = () => {
  let routes = [
    { path: "/", idx:"exact", element: <Login /> },
    { path: "/flight", idx:"", element: <Flight /> },
  ];
  return <Switch>
        <Router>
        {

          routes.map((item, i) => (
          item.idx==="exact"? <Route key={i} path={item.path} exact >
              {item.element}
          </Route>
          :<Route key={i} path={item.path}>{item.element}</Route>
          ))
        }
        </Router>
    
    </Switch>;
};


export default App;