import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import { store, key } from "./store";

import router from "./routes";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia).use(store, key).use(router).mount("#app");
