export default {
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
};
