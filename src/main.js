import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import axios from "axios";
window.axios = axios.create({
  baseURL: "http://localhost:8080/api/",
});

const app = createApp(App);

app.use(router);

app.mount("#app");
