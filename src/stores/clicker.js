import { defineStore } from "pinia";
import axios from "axios";

const baseUrl =
	"https://clicker-f6017-default-rtdb.europe-west1.firebasedatabase.app/";
const incomeItemsUrl = "incomeItems.json";
const clickUpgradesUrl = "clickUpgrades.json";

export const useClickerStore = defineStore("clicker", {
	state: () => {
		return {
			theme: "dark",
			score: 10,
			allTimeScore: 10,
			income: 0,
			clickPower: 1,
			incomeItems: [],
			clickUpgrades: [],
			clicksQuantity: 0,
		};
	},
	getters: {
		availableClickUpgrades: (state) => {
			return state.clickUpgrades.filter((item) => !item.purchased);
		},
		purchasedClickUpgrades(state) {
			return state.clickUpgrades.filter((item) => item.purchased);
		},
		purchasedIncomeItems(state) {
			return state.incomeItems.filter((item) => item.quantity);
		},
		getStatistic(state) {
			const statistic = [];

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
	actions: {
		switchTheme() {
			this.theme === "dark"
				? (this.theme = "light")
				: (this.theme = "dark");
		},
		updateScore() {
			this.score += this.income;
			this.allTimeScore += this.income;
		},
		handleClick() {
			this.score = this.score + this.clickPower;
			this.allTimeScore += this.clickPower;
			this.clicksQuantity++;
		},
		buyIncome(id) {
			const incomeItem = this.incomeItems.find((item) => item.id === id);
			incomeItem.quantity++;
			this.score -= incomeItem.price * incomeItem.quantity;
			this.income += incomeItem.income;
		},
		buyClickUpgrade(id) {
			const clickUpgrade = this.clickUpgrades.find(
				(item) => item.id === id
			);
			clickUpgrade.purchased = true;
			this.score -= clickUpgrade.price;
			this.clickPower = this.clickPower * clickUpgrade.multiplier;
		},
		setIncomeItems(incomeItems) {
			this.incomeItems = incomeItems;
		},
		setClickUpgrades(clickUpgrades) {
			this.clickUpgrades = clickUpgrades;
		},
		loadIncomeItems() {
			return axios
				.get(baseUrl + incomeItemsUrl)
				.then((res) => {
					const incomeItemsArray = [];
					for (const key in res.data) {
						if (res.data[key]) {
							incomeItemsArray.push({
								...res.data[key],
								id: key,
							});
						}
					}
					this.setIncomeItems(incomeItemsArray);
				})
				.catch((e) => console.log(e));
		},
		loadClickUpgrades() {
			return axios
				.get(baseUrl + clickUpgradesUrl)
				.then((res) => {
					const clickUpgradesArray = [];
					for (const key in res.data) {
						if (res.data[key]) {
							clickUpgradesArray.push({
								...res.data[key],
								id: key,
							});
						}
					}
					this.setClickUpgrades(clickUpgradesArray);
				})
				.catch((e) => console.log(e));
		},
	},
});
