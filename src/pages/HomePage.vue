<script setup>
import ScoreBoard from "@/components/ScoreBoard.vue";
import IncomeSection from "@/components/IncomeSection.vue";
import ClickUpgradeSection from "@/components/ClickUpgradeSection.vue";
import ActionsSection from "@/components/ActionsSection.vue";
import PurchasedUpgradesSection from "@/components/PurchasedUpgradesSection.vue";
// import {useClickerStore} from "@/stores/clicker";

// const counter = useClickerStore();
</script>

<template>
  <!-- <div>
      current count: {{ counter.count }}, doubled count: {{ counter.doubled }}
    </div>
    <button @click="counter.increment">
      +
    </button> -->
  <div class="container">
    <ScoreBoard />
    <ActionsSection />
    <IncomeSection />
    <ClickUpgradeSection />
    <PurchasedUpgradesSection />
  </div>
</template>

<style scoped></style>
