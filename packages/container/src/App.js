import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
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
                <DashboardWrapper />
              </Route>
              <Route path="/" component={MarketingWrapper} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
}
