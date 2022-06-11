// import Vue from "vue";
import { createRouter, createWebHistory } from "vue-router";

// Vue.use(Router);

//  pages
import HomePage from "@/pages/HomePage.vue";
import StatisticPage from "@/pages/StatisticPage.vue";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
		},
		{
			path: "/statistic/",
			name: "statistic",
			component: StatisticPage,
		},
		// {
		// 	path: "*",
		// 	name: "NotFound",
		// 	component: NotFound,
		// },
	],
});
