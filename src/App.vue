<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ScoreBoard from "./components/ScoreBoard.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const score = computed(() => store.getters.getCurrentScore);
const theme = computed(() => store.getters.getCurrentTheme);
const incomeItems = computed(() => store.getters.getIncomeItems);
function switchTheme() {
  store.dispatch("switchTheme");
}

setInterval(() => {
  store.dispatch("updateScore");
}, 1000);
function handleClick() {
  store.dispatch("handleClick");
}
function buyIncome(item) {
  store.dispatch("buyIncome", item);
}
</script>

<template>
  <ScoreBoard />
  <button @click="handleClick">+1</button>
  <p>Income shop:</p>
  <div v-for="item of incomeItems">
    <p>{{ item.name }} - {{ item.price }}</p>
    <button @click="buyIncome(item)" :disabled="score < item.price">
      +{{ item.income }}
    </button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
