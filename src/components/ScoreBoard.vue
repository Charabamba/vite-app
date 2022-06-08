<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const score = computed(() => store.getters.getCurrentScore);
const clickPower = computed(() => store.getters.getClickPowerValue);
const income = computed(() => store.getters.getIncomeValue);
</script>

<template>
  <h1>Score {{ score }}</h1>
  <p>Current income: {{ income }}</p>
  <p>Current click power: {{ clickPower }}</p>
</template>

<style scoped>
</style>
