<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const score = computed(() => store.getters.getCurrentScore);
const clickPower = computed(() => store.getters.getClickPowerValue);
const income = computed(() => store.getters.getIncomeValue);
</script>

<template>
  <section class="result-section">
    <div class="result-section__container">
      <p class="result-section__result-text">
        Score is:
        <span class="result-section__result">
          {{ score }}
        </span>
      </p>
      <p>Current income: {{ income }}</p>
      <p>Current click power: {{ clickPower }}</p>
    </div>
  </section>
</template>

<style scoped>
</style>
