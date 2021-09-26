import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";

import { syncNavigation, shouldSyncNavigation } from "../../common/utilties";
import App from "./App";

export const mount = (el, { onNavigation }) => {
  const memoryHistory = createMemoryHistory({
    initialEntries: [window.location.pathname],
  });

  if (onNavigation) memoryHistory.listen(onNavigation);

  ReactDOM.render(<App history={memoryHistory} />, el);
  // Object exposed to container
  return {
    onParentNavigation: (location, method) => {
      if (
        shouldSyncNavigation({ nextLocation: location, history: memoryHistory })
      ) {
        console.log("marketing >> onParentNavigation:", method, location);
        syncNavigation({
          nextLocation: location,
          nextMethod: method,
          history: memoryHistory,
        });
      }
    },
  };
};
