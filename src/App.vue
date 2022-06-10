<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ScoreBoard from "./components/ScoreBoard.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const score = computed(() => store.getters.getCurrentScore);
const incomeItems = computed(() => store.getters.getIncomeItems);
const clickUpgrades = computed(() => store.getters.getClickUpgrades);

setInterval(() => {
  store.dispatch("updateScore");
}, 1000);
function handleClick() {
  store.dispatch("handleClick");
}
function buyIncome(item) {
  store.dispatch("buyIncome", item);
}
function cickUpgrade(id) {
  store.dispatch("buyClickUpgrade", id);
}
</script>

<template>
  <ScoreBoard />
  <button @click="handleClick">
    +1
  </button>
  <h2>Income shop:</h2>
  <div
    v-for="item of incomeItems"
    :key="item.id"
  >
    <p>
      {{ item.name }} - {{ item.price }}
    </p>
    <button
      v-if="!item.purchased"
      :disabled="score < item.price"
      @click="buyIncome(item)"
    >
      +{{ item.income }}
    </button>
    <p v-else>
      purchased
    </p>
  </div>
  <h2>Click power upgrades:</h2>
  <div
    v-for="item of clickUpgrades"
    :key="item.id"
  >
    <p>
      {{ item.name }}: {{ item.description }}
    </p>
    <button
      v-if="!item.purchased"
      :disabled="score < item.price"
      @click="cickUpgrade(item.id)"
    >
      purchase for {{ item.price }}
    </button>
    <span v-else> purchased </span>
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
