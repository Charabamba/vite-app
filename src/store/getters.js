export default {
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
	purchasedIncomeItems(state) {
		return state.incomeItems.filter((item) => item.quantity);
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
};
