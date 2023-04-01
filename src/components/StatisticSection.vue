<script setup>
import { useClickerStore } from "@/stores/clicker";

const clickerStore = useClickerStore();
</script>

<template>
  <section>
    <h2>Main:</h2>
    <ul>
      <li
        v-for="item of clickerStore.getStatistic"
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
  <section v-if="clickerStore.purchasedClickUpgrades.length">
    <h2>Upgrades:</h2>
    <ul>
      <li
        v-for="item of clickerStore.purchasedClickUpgrades"
        :key="item.id"
      >
        <p>
          {{ item.name }}: {{ item.description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped></style>