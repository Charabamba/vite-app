<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const incomeItems = computed(() => store.getters.getIncomeItems);
const score = computed(() => store.getters.getCurrentScore);

function buyIncome(item) {
  store.dispatch("buyIncome", item);
}
</script>

<template>
  <h2>Income shop:</h2>
  <div
    v-for="item of incomeItems"
    :key="item.id"
  >
    <p>
      {{ item.name }} - {{ item.price }}
    </p>
    <a-button
      v-if="!item.purchased"
      type="primary"
      :disabled="score < item.price"
      @click="buyIncome(item)"
    >
      +{{ item.income }}
    </a-button>
    <p v-else>
      purchased
    </p>
  </div>
</template>

<style scoped>
</style>