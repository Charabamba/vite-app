import { createApp } from "vue";
import App from "./App.vue";

import { store, key } from "./store";

import router from "./routes";

const app = createApp(App);

app.use(store, key).use(router).mount("#app");
