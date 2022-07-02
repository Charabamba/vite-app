<script setup>
import ScoreBoard from "@/components/ScoreBoard.vue";
import IncomeSection from "@/components/IncomeSection.vue";
import ClickUpgradeSection from "@/components/ClickUpgradeSection.vue";
import ActionsSection from "@/components/ActionsSection.vue";
import PurchasedUpgradesSection from "@/components/PurchasedUpgradesSection.vue";
</script>

<template>
  <div class="container">
    <ScoreBoard />
    <ActionsSection />
    <IncomeSection />
    <ClickUpgradeSection />
    <PurchasedUpgradesSection />
  </div>
</template>

<style scoped>
</style>
