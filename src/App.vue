<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from "./store";
import { computed } from "vue";
import FooterSection from "@/components/FooterSection.vue";
import HeaderSection from "@/components/HeaderSection.vue";

const store = useStore();

setInterval(() => {
  store.dispatch("updateScore");
}, 1000);
store.dispatch("loadIncomeItems");
store.dispatch("loadClickUpgrades");

const currentTheme = computed(() => store.getters.getCurrentTheme);
</script>

<template>
  <div :class="['app__wrapper', currentTheme]">
    <HeaderSection />
    <div class="main-content">
      <router-view />
    </div>
    <FooterSection />
  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");

:root {
  --background-main: #f2f2f2;
  --background-secondary: #1f1f1f;
  --background-light: #f2f2f2;
  --border-main: #1f1f1f;
  --color-main: #1f1f1f;
  --color-secondary: #f2f2f2;
}
.dark {
  --background-main: #1f1f1f;
  --background-secondary: #f2f2f2;
  --border-main: #f2f2f2;
  --color-main: #f2f2f2;
  --color-secondary: #1f1f1f;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  padding: 0px 10px;
  max-width: 1600px;
}
.app__wrapper {
  color: var(--color-main);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .main-content {
    flex-grow: 1;
    background-color: var(--background-main);
  }
}
a {
  text-decoration: none;
  color: #1f1f1f;
  display: block;
}
.header__menu-item_right {
  margin-left: auto;
}
.router-link-active {
  text-decoration: underline;
}
.switch-theme__button {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  height: 100%;
}
.switch-theme__icon {
  fill: #ffffff;
  transition: 0.15s;
}
.dark .switch-theme__icon {
  filter: invert(100%);
}
/* header */

.header {
  background-color: #1f1f1f;
  color: white;
  position: sticky;
  top: 0px;
  border-bottom: 2px solid var(--border-main);
  .header__menu {
    display: flex;
  }
  .header__menu-item {
    transition: 0.3s;
  }
  .header__menu-item a {
    padding: 10px 20px;
  }
  .header__menu-item:hover {
    background-color: #f2f2f2;
    color: #1f1f1f;
  }
  .header__menu-item a {
    color: inherit;
  }
}

/* main */
.main__title {
  font-size: 24px;
  font-weight: bold;
  padding: 24px 0;
}

/* invest */
.investment-section__container {
  padding: 20px;
}

.investment-section__title {
  font-size: 26px;
  text-align: center;
  padding: 20px 0;
}
.investment-section__item-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}
.investment-section__item {
  padding: 10px 20px;
  color: var(--color-main);
  border: 2px solid var(--border-main);
  background-color: var(--background-main);
  border-radius: 5px;
  transition: 0.3s;
  width: 100%;
}
.investment-section__item:not(:disabled):hover {
  background-color: var(--background-secondary);
  color: var(--color-secondary);
}
.investment-section__item:disabled {
  opacity: 0.5;
}
.investment-section__cost {
  font-weight: bold;
}
</style>
