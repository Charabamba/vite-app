<script setup>
import { computed } from "vue";
import { useStore } from "../store";
import IncomeItem from "@/components/IncomeItem.vue";

const store = useStore();

const incomeItems = computed(() => store.getters.getIncomeItems);
const score = computed(() => store.getters.getCurrentScore);
const totalScore = computed(() => store.getters.getTotalScore);

function buyIncome(id) {
  store.dispatch("buyIncome", id);
}
function isShow(price) {
  return totalScore.value / price >= 0.6;
}
</script>

<template>
  <section class="investment-section">
    <h2 class="investment-section__title">
      Income shop:
    </h2>
    <div class="investment-section__container">
      <ul class="investment-section__item-list">
        <li
          v-for="item of incomeItems"
          :key="item.id"
        >
          <IncomeItem
            v-if="isShow(item.price)"
            :id="item.id"
            :name="item.name"
            :price="item.price * (item.quantity + 1)"
            :quantity="item.quantity"
            :income="item.income"
            :disabled="score < (item.price * (item.quantity + 1))"
            @purchase="buyIncome($event)"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
</style>