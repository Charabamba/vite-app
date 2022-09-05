import { IStore, IClickPowerUpgrade, IIncomeItem } from "../models/store";

export default {
	switchTheme(state: IStore) {
		state.theme === "dark" ? (state.theme = "light") : (state.theme = "dark");
	},
	updateScore(state: IStore) {
		state.score += state.income;
		state.allTimeScore += state.income;
	},
	handleClick(state: IStore) {
		state.score = state.score + state.clickPower;
		state.allTimeScore += state.clickPower;
		state.clicksQuantity++;
	},
	buyIncome(state: IStore, id: string) {
		const incomeItem = state.incomeItems.find((item) => item.id === id);
		incomeItem.quantity++;
		state.score -= incomeItem.price * incomeItem.quantity;
		state.income += incomeItem.income;
	},
	buyClickUpgrade(state: IStore, id: string) {
		console.log(typeof id);

		const clickUpgrade = state.clickUpgrades.find((item) => item.id === id);
		clickUpgrade.purchased = true;
		state.score -= clickUpgrade.price;
		state.clickPower = state.clickPower * clickUpgrade.multiplier;
	},
	setIncomeItems(state: IStore, incomeItems: Array<IIncomeItem>) {
		state.incomeItems = incomeItems;
	},
	setClickUpgrades(state: IStore, clickUpgrades: Array<IClickPowerUpgrade>) {
		state.clickUpgrades = clickUpgrades;
	},
};
