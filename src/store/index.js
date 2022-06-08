import {createStore} from 'vuex'

export default createStore({
    state: {
        theme: "dark",
    },
    mutations: {
        switchTheme(state) {
            state.theme === "dark" ? (state.theme = "light") : (state.theme = "dark");
        },
    },
    actions: {
        switchTheme({commit}) {
            commit("switchTheme");
        },
    },
    getters: {
        getCurrentTheme(state) {
            return state.theme;
        },
    },
})