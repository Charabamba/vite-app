import { createStore } from "vuex";
import axios from "axios";

const baseUrl =
	"https://clicker-f6017-default-rtdb.europe-west1.firebasedatabase.app/";
const incomeItemsUrl = "incomeItems.json";
const clickUpgradesUrl = "clickUpgrades.json";

export default createStore({
	state: {
		theme: "dark",
		score: 10,
		allTimeScore: 10,
		income: 0,
		clickPower: 1,
		incomeItems: [],
		clickUpgrades: [],
		clicksQuantity: 0,
	},
	mutations: {
		switchTheme(state) {
			state.theme === "dark" ? (state.theme = "light") : (state.theme = "dark");
		},
		updateScore(state) {
			state.score += state.income;
			state.allTimeScore += state.income;
		},
		handleClick(state) {
			state.score = state.score + state.clickPower;
			state.allTimeScore += state.clickPower;
			state.clicksQuantity++;
		},
		buyIncome(state, id) {
			let incomeItem = state.incomeItems.find((item) => item.id === id);
			incomeItem.quantity++;
			state.score -= incomeItem.price * incomeItem.quantity;
			state.income += incomeItem.income;
		},
		buyClickUpgrade(state, id) {
			let clickUpgrade = state.clickUpgrades.find((item) => item.id === id);
			clickUpgrade.purchased = true;
			state.score -= clickUpgrade.price;
			state.clickPower = state.clickPower * clickUpgrade.multiplier;
		},
		setIncomeItems(state, incomeItems) {
			state.incomeItems = incomeItems;
		},
		setClickUpgrades(state, clickUpgrades) {
			state.clickUpgrades = clickUpgrades;
		},
	},
	actions: {
		loadIncomeItems({ commit }) {
			return axios
				.get(baseUrl + incomeItemsUrl)
				.then((res) => {
					const incomeItemsArray = [];
					for (let key in res.data) {
						if (res.data[key]) {
							incomeItemsArray.push({ ...res.data[key], id: key });
						}
					}
					commit("setIncomeItems", incomeItemsArray);
				})
				.catch((e) => console.log(e));
		},
		loadClickUpgrades({ commit }) {
			return axios
				.get(baseUrl + clickUpgradesUrl)
				.then((res) => {
					const clickUpgradesArray = [];
					for (let key in res.data) {
						if (res.data[key]) {
							clickUpgradesArray.push({ ...res.data[key], id: key });
						}
					}
					commit("setClickUpgrades", clickUpgradesArray);
				})
				.catch((e) => console.log(e));
		},
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
		getTotalScore(state) {
			return state.allTimeScore;
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
		getClicksQuantity(state) {
			return state.clicksQuantity;
		},
		getStatistic(state) {
			let statistic = [];
			addStatisticItem("Click power", state.clickPower);
			addStatisticItem("Clicks quantity", state.clicksQuantity);
			addStatisticItem("Score", state.score);
			addStatisticItem("All time score", state.allTimeScore);
			addStatisticItem("Income", state.income);

			function addStatisticItem(title, value) {
				if (value) {
					statistic.push({
						title: title,
						value: value,
					});
				}
			}

			return statistic;
		},
	},
});
