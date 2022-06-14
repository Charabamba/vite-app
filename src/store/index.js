import { createStore } from "vuex";

export default createStore({
	state: {
		theme: "dark",
		score: 10,
		income: 0,
		clickPower: 1,
		incomeItems: [
			{
				id: 1,
				name: "first",
				price: 10,
				income: 1,
			},
			{
				id: 2,
				name: "second",
				price: 20,
				income: 2,
			},
		],
		clickUpgrades: [
			{
				id: 1,
				name: "1 upgrade",
				description: "upgrade description 1",
				price: 10,
				multiplier: 2,
				purchased: false,
			},
			{
				id: 2,
				name: "2 upgrade",
				description: "upgrade description 2",
				price: 100,
				multiplier: 2,
				purchased: false,
			},
			{
				id: 3,
				name: "3 upgrade",
				description: "upgrade description 3",
				price: 1000,
				multiplier: 2,
				purchased: false,
			},
			{
				id: 4,
				name: "4 upgrade",
				description: "upgrade description 4",
				price: 10000,
				multiplier: 2,
				purchased: false,
			},
			{
				id: 5,
				name: "5 upgrade",
				description: "upgrade description 5",
				price: 1000,
				multiplier: 2,
				purchased: false,
			},
			{
				id: 6,
				name: "6 upgrade",
				description: "upgrade description 6",
				price: 10000,
				multiplier: 2,
				purchased: false,
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
		buyClickUpgrade(state, id) {
			let clickUpgrade = state.clickUpgrades.find(
				(item) => item.id === id
			);
			clickUpgrade.purchased = true;
			state.score -= clickUpgrade.price;
			state.clickPower = state.clickPower * clickUpgrade.multiplier;
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
		buyClickUpgrade({ commit }, payload) {
			commit("buyClickUpgrade", payload);
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
		getClickUpgrades(state) {
			return state.clickUpgrades;
		},
		availableClickUpgrades(state) {
			return state.clickUpgrades.filter((item) => !item.purchased);
		},
		purchasedClickUpgrades(state) {
			return state.clickUpgrades.filter((item) => item.purchased);
		},
	},
});
