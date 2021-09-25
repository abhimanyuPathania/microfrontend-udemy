import React from "react";
import { BrowserRouter } from "react-router-dom";

import MarketingWrapper from "./components/MarketingWrapper";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingWrapper />
      </div>
    </BrowserRouter>
  );
}
