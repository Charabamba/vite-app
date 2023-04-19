import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./routes";

import { languages, defaultLocale } from "./i18n";
import { createI18n, useI18n } from "vue-i18n";

const messages = Object.assign(languages);
const i18n = createI18n({
	legacy: false,
	locale: localStorage.getItem("lang") ?? defaultLocale,
	fallbackLocale: "en",
	messages,
});

const pinia = createPinia();

const app = createApp(App, {
	setup() {
		const { t } = useI18n();
		return t;
	},
});

app.use(pinia).use(router).use(i18n).mount("#app");
