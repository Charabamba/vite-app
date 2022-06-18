<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const purchasedClickUpgrades = computed(
  () => store.getters.purchasedClickUpgrades
);
const statistic = computed(() => store.getters.getStatistic);
</script>

<template>
  <section>
    <h2>Main:</h2>
    <ul>
      <li
        v-for="item of statistic"
        :key="item.title"
      >
        <p>
          <b>
            {{ item.title }}:
          </b>
          {{ item.value }}
        </p>
      </li>
    </ul>
  </section>
  <section v-if="purchasedClickUpgrades.length">
    <h2>Upgrades:</h2>
    <ul>
      <li
        v-for="item of purchasedClickUpgrades"
        :key="item.id"
      >
        <p>
          {{ item.name }}: {{ item.description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
</style>