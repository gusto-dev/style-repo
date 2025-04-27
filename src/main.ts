import { createApp } from "vue";
import App from "./App.vue";
import "@style/index.scss";

createApp(App).mount("#app");

export { default as StyleProvider } from "./components/StyleProvider.vue";
