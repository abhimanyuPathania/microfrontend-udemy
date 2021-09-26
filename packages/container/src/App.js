import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Progress from "./components/Progress";
const MarketingWrapper = lazy(() => import("./components/MarketingWrapper"));
const AuthWrapper = lazy(() => import("./components/AuthWrapper"));

const generateClassName = createGenerateClassName({
  productionPrefix: "cointainer",
});

export default function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthWrapper} />
              <Route path="/" component={MarketingWrapper} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
}
