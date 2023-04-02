import { defineStore } from "pinia";

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
		async loadIncomeItems() {
			try {
				const res = await fetch(baseUrl + incomeItemsUrl);
				if (!res.ok) {
					throw new Error("Something went wrong");
				}
				const data = await res.json();
				const incomeItemsArray = [];
				for (const key in data) {
					if (data[key]) {
						incomeItemsArray.push({
							...data[key],
							id: key,
						});
					}
				}
				this.incomeItems = incomeItemsArray;
			} catch (err) {
				console.log(err.message);
			}
		},
		async loadClickUpgrades() {
			try {
				const res = await fetch(baseUrl + clickUpgradesUrl);
				if (!res.ok) {
					throw new Error("Something went wrong");
				}
				const data = await res.json();
				const clickUpgradesArray = [];
				for (const key in data) {
					if (data[key]) {
						clickUpgradesArray.push({
							...data[key],
							id: key,
						});
					}
				}
				this.clickUpgrades = clickUpgradesArray;
			} catch (err) {
				console.log(err.message);
			}
		},
	},
});
