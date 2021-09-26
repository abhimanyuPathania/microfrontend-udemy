import { createBrowserHistory } from "history";

import { mount } from "./bootstrap";

mount(document.querySelector("#mock-auth"), {
  // Use browser history when running app in isolation
  defaultHistory: createBrowserHistory(),
});
