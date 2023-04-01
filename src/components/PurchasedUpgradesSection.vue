<script setup>
import PurchasedClickUpgrade from "@/components/PurchasedClickUpgrade.vue";
import PurchasedIncomeItem from "@/components/PurchasedIncomeItem.vue";
import { useClickerStore } from "@/stores/clicker";

const clickerStore = useClickerStore();
</script>

<template>
  <h3
    v-if="clickerStore.purchasedIncomeItems.length || clickerStore.purchasedClickUpgrades.length"
    class="investment-section__title"
  >
    Purchased upgrades
  </h3>
  <section class="purchased-upgrades">
    <div class="purchased-upgrades__container">
      <ul>
        <PurchasedIncomeItem
          v-for="item of clickerStore.purchasedIncomeItems"
          :key="item.id"
          :name="item.name"
          :quantity="item.quantity"
        />
      </ul>
      <ul>
        <PurchasedClickUpgrade
          v-for="item of clickerStore.purchasedClickUpgrades"
          :key="item.id"
          :name="item.name"
          :description="item.description"
        />
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.purchased-upgrades__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
}
</style>