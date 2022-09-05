import { IStore, IStatisticItem } from "../models/store";

export default {
	getCurrentTheme(state: IStore) {
		return state.theme;
	},
	getCurrentScore(state: IStore) {
		return state.score;
	},
	getTotalScore(state: IStore) {
		return state.allTimeScore;
	},
	getClickPowerValue(state: IStore) {
		return state.clickPower;
	},
	getIncomeValue(state: IStore) {
		return state.income;
	},
	getIncomeItems(state: IStore) {
		return state.incomeItems;
	},
	getClickUpgrades(state: IStore) {
		return state.clickUpgrades;
	},
	availableClickUpgrades(state: IStore) {
		return state.clickUpgrades.filter((item) => !item.purchased);
	},
	purchasedClickUpgrades(state: IStore) {
		return state.clickUpgrades.filter((item) => item.purchased);
	},
	purchasedIncomeItems(state: IStore) {
		return state.incomeItems.filter((item) => item.quantity);
	},
	getClicksQuantity(state: IStore) {
		return state.clicksQuantity;
	},
	getStatistic(state: IStore) {
		const statistic: Array<IStatisticItem> = [];

		addStatisticItem("Click power", state.clickPower);
		addStatisticItem("Clicks quantity", state.clicksQuantity);
		addStatisticItem("Score", state.score);
		addStatisticItem("All time score", state.allTimeScore);
		addStatisticItem("Income", state.income);

		function addStatisticItem(title: string, value: number) {
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
