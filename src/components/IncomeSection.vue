<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import IncomeItem from "@/components/IncomeItem.vue";

const store = useStore();

const incomeItems = computed(() => store.getters.getIncomeItems);
const score = computed(() => store.getters.getCurrentScore);

function buyIncome(id) {
  store.dispatch("buyIncome", id);
}
</script>

<template>
  <h2>Income shop:</h2>
  <div
    v-for="item of incomeItems"
    :key="item.id"
  >
    <IncomeItem
      :id="item.id"
      :name="item.name"
      :price="item.price * (item.quantity + 1)"
      :quantity="item.quantity"
      :income="item.income"
      :disabled="score < (item.price * (item.quantity + 1))"
      @purchase="buyIncome($event)"
    />
  </div>
</template>

<style scoped>
</style>