<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const score = computed(() => store.getters.getCurrentScore);

const clickUpgrades = computed(() => store.getters.getClickUpgrades);

function cickUpgrade(id) {
  store.dispatch("buyClickUpgrade", id);
}
</script>

<template>
  <h2>Click power upgrades:</h2>
  <div
    v-for="item of clickUpgrades"
    :key="item.id"
  >
    <p>
      {{ item.name }}: {{ item.description }}
    </p>
    <a-button
      v-if="!item.purchased"
      type="primary"
      :disabled="score < item.price"
      @click="cickUpgrade(item.id)"
    >
      purchase for {{ item.price }}
    </a-button>
    <span v-else> purchased </span>
  </div>
</template>

<style scoped>
</style>
