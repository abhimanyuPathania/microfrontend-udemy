import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import MarketingWrapper from "./components/MarketingWrapper";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "marketing",
});

export default function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingWrapper />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
}
