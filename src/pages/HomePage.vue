<script setup>
import ScoreBoard from "@/components/ScoreBoard.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const score = computed(() => store.getters.getCurrentScore);
const incomeItems = computed(() => store.getters.getIncomeItems);
const clickUpgrades = computed(() => store.getters.getClickUpgrades);

function buyIncome(item) {
  store.dispatch("buyIncome", item);
}
function cickUpgrade(id) {
  store.dispatch("buyClickUpgrade", id);
}
</script>

<template>
  <h1>Home page</h1>
  <ScoreBoard />
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

<style scoped>
</style>
