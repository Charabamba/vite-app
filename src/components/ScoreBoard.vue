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
      <p class="result-section__text_small">
        Current income: {{ income }}
      </p>
      <p class="result-section__text_small">
        Current click power: {{ clickPower }}
      </p>
    </div>
  </section>
</template>

<style>
.result-section__container {
  padding: 30px 10px;
}

.result-section__result-text {
  font-size: 70px;
  text-align: center;
}

.result-section__text_small {
  text-align: center;
}
</style>
