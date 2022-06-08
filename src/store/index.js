import { createStore } from "vuex";

export default createStore({
	state: {
		theme: "dark",
		score: 0,
		income: 0,
		clickPower: 1,
		incomeItems: [
			{
				name: "first",
				price: 10,
				income: 1,
			},
			{
				name: "second",
				price: 20,
				income: 2,
			},
		],
	},
	mutations: {
		switchTheme(state) {
			state.theme === "dark"
				? (state.theme = "light")
				: (state.theme = "dark");
		},
		updateScore(state) {
			state.score = state.score + state.income;
		},
		handleClick(state) {
			state.score = state.score + state.clickPower;
		},
		buyIncome(state, payload) {
			state.score -= payload.price;
			state.income += payload.income;
		},
	},
	actions: {
		switchTheme({ commit }) {
			commit("switchTheme");
		},
		updateScore({ commit }) {
			commit("updateScore");
		},
		handleClick({ commit }) {
			commit("handleClick");
		},
		buyIncome({ commit }, payload) {
			commit("buyIncome", payload);
		},
	},
	getters: {
		getCurrentTheme(state) {
			return state.theme;
		},
		getCurrentScore(state) {
			return state.score;
		},
		getClickPowerValue(state) {
			return state.clickPower;
		},
		getIncomeValue(state) {
			return state.income;
		},
		getIncomeItems(state) {
			return state.incomeItems;
		},
	},
});
