import { createApp } from "vue";
import App from "./App.vue";

import store from "./store";

// https://www.antdv.com
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import router from "./routes";

const app = createApp(App);

app.use(store).use(Antd).use(router).mount("#app");
