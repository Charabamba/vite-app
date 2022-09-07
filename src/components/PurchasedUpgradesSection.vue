<script setup>
import { computed } from "vue";
import { useStore } from "../store";
import PurchasedClickUpgrade from "@/components/PurchasedClickUpgrade.vue";
import PurchasedIncomeItem from "@/components/PurchasedIncomeItem.vue";

const store = useStore();

const purchasedClickUpgrades = computed(
  () => store.getters.purchasedClickUpgrades
);
const purchasedIncomeItems = computed(() => store.getters.purchasedIncomeItems);
</script>

<template>
  <h3
    v-if="purchasedIncomeItems.length || purchasedClickUpgrades.length"
    class="investment-section__title"
  >
    Purchased upgrades
  </h3>
  <section class="purchased-upgrades">
    <div class="purchased-upgrades__container">
      <ul>
        <PurchasedIncomeItem
          v-for="item of purchasedIncomeItems"
          :key="item.id"
          :name="item.name"
          :quantity="item.quantity"
        />
      </ul>
      <ul>
        <PurchasedClickUpgrade
          v-for="item of purchasedClickUpgrades"
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