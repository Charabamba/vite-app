import { IStore } from "../models/store";
export default () => {
	const store: IStore = {
		theme: "dark",
		score: 10,
		allTimeScore: 10,
		income: 0,
		clickPower: 1,
		incomeItems: [],
		clickUpgrades: [],
		clicksQuantity: 0,
	};
	return store;
};
