import React from "react";
import "./styles.css";
import { LandingPage } from "./landing-page";
import { Route, Switch } from "react-router-dom";
import { AppLayout } from "./app.layout";
import { ProtectedRoute } from "./protected.route";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}
