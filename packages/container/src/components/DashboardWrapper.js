import React, { useRef, useEffect } from "react";

import { mount as mountDashboard } from "dashboard/DashboardApp";

export default function DashboardWrapper() {
  const ref = useRef(null);

  useEffect(() => {
    mountDashboard(ref.current);
  }, []);
  return <div ref={ref}></div>;
}
