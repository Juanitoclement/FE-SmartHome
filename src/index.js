import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/css/smart-home-react.css?v=1.4.1";
import firebase from "firebase";
import { config, askForPermissionToReceiveNotifications } from "./firebase/push-notification";
import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();
firebase.initializeApp(config);
askForPermissionToReceiveNotifications();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
