<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import PurchasedClickUpgrade from "@/components/PurchasedClickUpgrade.vue";

const store = useStore();

const purchasedClickUpgrades = computed(
  () => store.getters.purchasedClickUpgrades
);
</script>

<template>
  <h3>
    Purchased upgrades
  </h3>
  <section v-if="purchasedClickUpgrades.length">
    <PurchasedClickUpgrade
      v-for="item of purchasedClickUpgrades"
      :key="item.id"
      :name="item.name"
      :description="item.description"
    />
  </section>
</template>

<style lang="scss">
</style>