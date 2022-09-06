import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { IStore } from "../models/store";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export const key: InjectionKey<Store<IStore>> = Symbol();

export const store = createStore<IStore>({
	state: state,
	actions: actions,
	mutations: mutations,
	getters: getters,
});

export function useStore() {
	return baseUseStore(key);
}
