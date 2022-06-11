<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ScoreBoard from "./components/ScoreBoard.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const score = computed(() => store.getters.getCurrentScore);
const incomeItems = computed(() => store.getters.getIncomeItems);
const clickUpgrades = computed(() => store.getters.getClickUpgrades);

setInterval(() => {
  store.dispatch("updateScore");
}, 1000);
function handleClick() {
  store.dispatch("handleClick");
}
function buyIncome(item) {
  store.dispatch("buyIncome", item);
}
function cickUpgrade(id) {
  store.dispatch("buyClickUpgrade", id);
}
</script>

<template>
  <a-layout class="layout layout_height">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          Home
        </a-menu-item>
        <a-menu-item key="2">
          Statistic
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 32px 50px 0">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <ScoreBoard />
        <button @click="handleClick">
          +1
        </button>
        <h2>Income shop:</h2>
        <div
          v-for="item of incomeItems"
          :key="item.id"
        >
          <p>
            {{ item.name }} - {{ item.price }}
          </p>
          <button
            v-if="!item.purchased"
            :disabled="score < item.price"
            @click="buyIncome(item)"
          >
            +{{ item.income }}
          </button>
          <p v-else>
            purchased
          </p>
        </div>
        <h2>Click power upgrades:</h2>
        <div
          v-for="item of clickUpgrades"
          :key="item.id"
        >
          <p>
            {{ item.name }}: {{ item.description }}
          </p>
          <button
            v-if="!item.purchased"
            :disabled="score < item.price"
            @click="cickUpgrade(item.id)"
          >
            purchase for {{ item.price }}
          </button>
          <span v-else> purchased </span>
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Footer copyright ©2022 Created test
    </a-layout-footer>
  </a-layout>
</template>

<style>
.layout.layout_height {
  min-height: 100vh;
}
</style>
