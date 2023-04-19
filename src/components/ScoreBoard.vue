<script setup>
import animatedNumber from "@/components/AnimatedNumber.vue";
import { useClickerStore } from "@/stores/clicker";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({
  useScope: "global",
});

const clickerStore = useClickerStore();
</script>

<template>
  <section class="result-section">
    <div class="result-section__container">
      <p class="result-section__result-text">
        {{ $t('scoreText') }}
        <span class="result-section__result">
          <animatedNumber
            :number="clickerStore.score"
            :animation-seconds="1"
          />
        </span>
      </p>
      <p class="result-section__text_small">
        {{ $t('currentIncome') }} {{ clickerStore.income }}
      </p>
      <p class="result-section__text_small">
        {{ $t('currentClickPower') }} {{ clickerStore.clickPower }}
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
