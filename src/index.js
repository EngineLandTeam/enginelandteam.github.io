// import "bootstrap";
// import "@fortawesome/fontawesome-free";
import "./Components/scss/styles.scss";

// import { inicio } from "Core/App.js";
// const nombre = "Index Alex";
// inicio(nombre);

import App from "./Containers/App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
