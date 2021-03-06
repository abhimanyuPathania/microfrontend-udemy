import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount as mountMarketing } from "marketing/MarketingApp";
import { syncNavigation, shouldSyncNavigation } from "../../../common/utilties";

export default function MarketingWrapper() {
  const ref = useRef(null);
  // container's history object
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigation } = mountMarketing(ref.current, {
      onNavigation: (location, method) => {
        if (shouldSyncNavigation({ nextLocation: location, history })) {
          console.log("container >> onNavigation::marketing", method, location);
          syncNavigation({
            nextLocation: location,
            nextMethod: method,
            history,
          });
        }
      },
    });

    if (onParentNavigation) history.listen(onParentNavigation);
  }, []);
  return <div ref={ref}></div>;
}
