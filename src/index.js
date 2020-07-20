import "./Components/scss/styles.scss";
import App from "./Containers/App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
