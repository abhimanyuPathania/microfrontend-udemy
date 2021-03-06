import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";

import { syncNavigation, shouldSyncNavigation } from "../../common/utilties";
import App from "./App";

export const mount = (el, { onNavigation, defaultHistory }) => {
  const memoryHistory = createMemoryHistory({
    initialEntries: [window.location.pathname],
  });
  const history = defaultHistory || memoryHistory;

  if (onNavigation) history.listen(onNavigation);

  // defaultHistory is the BrowserHitsory injected when running in isolation
  ReactDOM.render(<App history={history} />, el);
  // Object exposed to container
  return {
    onParentNavigation: (location, method) => {
      if (shouldSyncNavigation({ nextLocation: location, history })) {
        console.log("marketing >> onParentNavigation:", method, location);
        syncNavigation({
          nextLocation: location,
          nextMethod: method,
          history,
        });
      }
    },
  };
};
