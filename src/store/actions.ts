import axios from "axios";

const baseUrl =
	"https://clicker-f6017-default-rtdb.europe-west1.firebasedatabase.app/";
const incomeItemsUrl = "incomeItems.json";
const clickUpgradesUrl = "clickUpgrades.json";

export default {
	loadIncomeItems({ commit }) {
		return axios
			.get(baseUrl + incomeItemsUrl)
			.then((res) => {
				const incomeItemsArray = [];
				for (const key in res.data) {
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
				for (const key in res.data) {
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
};
