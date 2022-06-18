<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const purchasedClickUpgrades = computed(
  () => store.getters.purchasedClickUpgrades
);
const clicksQuantity = computed(() => store.getters.getClicksQuantity);
const score = computed(() => store.getters.getCurrentScore);
const clickPower = computed(() => store.getters.getClickPowerValue);
const income = computed(() => store.getters.getIncomeValue);
</script>

<template>
  <section>
    <h2>Main:</h2>
    <ul>
      <li v-if="clicksQuantity">
        <p>
          <b>
            Clicks:
          </b>
          {{ clicksQuantity }}
        </p>
      </li>
      <li v-if="score">
        <p>
          <b>
            Score:
          </b>
          {{ score }}
        </p>
      </li>
      <li v-if="clickPower">
        <p>
          <b>
            clickPower:
          </b>
          {{ clickPower }}
        </p>
      </li>
      <li v-if="income">
        <p>
          <b>
            income:
          </b>
          {{ income }}
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