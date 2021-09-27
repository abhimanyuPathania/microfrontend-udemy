import React, { lazy, Suspense, useState, useEffect } from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Progress from "./components/Progress";
const MarketingWrapper = lazy(() => import("./components/MarketingWrapper"));
const AuthWrapper = lazy(() => import("./components/AuthWrapper"));
const DashboardWrapper = lazy(() => import("./components/DashboardWrapper"));

const generateClassName = createGenerateClassName({
  productionPrefix: "cointainer",
});
const history = createBrowserHistory();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <div>
          <Header
            signedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthWrapper onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardWrapper />
              </Route>
              <Route path="/" component={MarketingWrapper} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );
}
