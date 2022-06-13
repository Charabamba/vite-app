<script setup>
import ScoreBoard from "@/components/ScoreBoard.vue";
import IncomeSection from "@/components/IncomeSection.vue";
import ClickUpgradeSection from "@/components/ClickUpgradeSection.vue";
import { useStore } from "vuex";

const store = useStore();

function handleClick() {
  store.dispatch("handleClick");
}
</script>

<template>
  <h1>Home page</h1>
  <ScoreBoard />
  <a-button
    type="primary"
    size="large"
    @click="handleClick"
  >
    +1
  </a-button>

  <IncomeSection />
  <ClickUpgradeSection />
</template>

<style scoped>
</style>
