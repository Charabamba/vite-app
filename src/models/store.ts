export interface IStore {
	theme: string;
	score: number;
	allTimeScore: number;
	income: number;
	clickPower: number;
	incomeItems: Array<IIncomeItem>;
	clickUpgrades: Array<IClickPowerUpgrade>;
	clicksQuantity: number;
}

export interface IIncomeItem {
	id: string;
	income: number;
	name: string;
	price: number;
	quantity: number;
}

export interface IClickPowerUpgrade {
	description: string;
	id: string;
	multiplier: number;
	name: string;
	price: number;
	purchased: boolean;
}

export interface IStatisticItem {
	title: string;
	value: number;
}
