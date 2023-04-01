<script setup>
import IncomeItem from "@/components/IncomeItem.vue";
import { useClickerStore } from "@/stores/clicker";
const clickerStore = useClickerStore();

function buyIncome(id) {
  clickerStore.buyIncome(id);
}

function isShow(price) {
  return clickerStore.allTimeScore / price >= 0.6;
}
</script>

<template>
  <section class="investment-section">
    <h2 class="investment-section__title">
      Income shop:
    </h2>
    <div class="investment-section__container">
      <ul class="investment-section__item-list">
        <template
          v-for="item of clickerStore.incomeItems"
          :key="item.id"
        >
          <li v-if="isShow(item.price)">
            <IncomeItem
              :id="item.id"
              :name="item.name"
              :price="item.price * (item.quantity + 1)"
              :quantity="item.quantity"
              :income="item.income"
              :disabled="clickerStore.score < (item.price * (item.quantity + 1))"
              @purchase="buyIncome($event)"
            />
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>