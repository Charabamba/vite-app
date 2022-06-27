<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import PurchasedClickUpgrade from "@/components/PurchasedClickUpgrade.vue";
import AvailableClickUpgrade from "@/components/AvailableClickUpgrade.vue";

const store = useStore();
const score = computed(() => store.getters.getCurrentScore);

const purchasedClickUpgrades = computed(
  () => store.getters.purchasedClickUpgrades
);
const availableClickUpgrades = computed(
  () => store.getters.availableClickUpgrades
);

function cickUpgrade(id) {
  store.dispatch("buyClickUpgrade", id);
}
</script>

<template>
  <section v-if="availableClickUpgrades.length">
    <h2>Available click power upgrades:</h2>
    <AvailableClickUpgrade
      v-for="item of availableClickUpgrades"
      :id="item.id"
      :key="item.id"
      :name="item.name"
      :description="item.description"
      :disabled="score < item.price"
      :price="item.price"
      @purchase="cickUpgrade($event)"
    />
  </section>
  <section v-else>
    <a-spin />
  </section>

  <section v-if="purchasedClickUpgrades.length">
    <h2>
      Purchased click power upgrades:
    </h2>
    <PurchasedClickUpgrade
      v-for="item of purchasedClickUpgrades"
      :key="item.id"
      :name="item.name"
      :description="item.description"
    />
  </section>
</template>

<style scoped>
</style>
