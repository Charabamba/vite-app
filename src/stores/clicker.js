import { defineStore } from "pinia";

export const useClickerStore = defineStore("clicker", {
	state: () => {
		return {
			count: 1,
		};
	},
	getters: {
		doubled() {
			return this.count * 2;
		},
		doubleCount: (state) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++;
		},
	},
});
