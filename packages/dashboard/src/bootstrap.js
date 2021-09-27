import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

export const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};
