<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

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
    <div
      v-for="item of availableClickUpgrades"
      :key="item.id"
    >
      <p>
        {{ item.name }}: {{ item.description }}
      </p>
      <a-button
        type="primary"
        :disabled="score < item.price"
        @click="cickUpgrade(item.id)"
      >
        purchase for {{ item.price }}
      </a-button>
    </div>
  </section>

  <section v-if="purchasedClickUpgrades.length">
    <h2>
      Purchased click power upgrades:
    </h2>
    <div
      v-for="item of purchasedClickUpgrades"
      :key="item.id"
    >
      <p>
        {{ item.name }}: {{ item.description }}
      </p>
    </div>
  </section>
</template>

<style scoped>
</style>
