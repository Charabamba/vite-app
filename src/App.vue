<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from "./store";

const store = useStore();

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Statistic",
    url: "/statistic/",
  },
];

setInterval(() => {
  store.dispatch("updateScore");
}, 1000);
store.dispatch("loadIncomeItems");
store.dispatch("loadClickUpgrades");
</script>

<template>
  <div class="app__wrapper">
    <header class="header">
      <div class="container">
        <div class="header__container">
          <ul class="header__menu">
            <li
              v-for="link of links"
              :key="link.url"
              class="header__menu-item"
            >
              <router-link :to="link.url">
                {{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="main-content">
      <router-view />
    </div>
    <footer class="footer">
      <div class="container">
        <p class="footer__version">
          Footer copyright ©2022 Created test
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .main-content {
    flex-grow: 1;
    background-color: #f2f2f2;
  }
}
a {
  text-decoration: none;
  color: #1f1f1f;
  display: block;
}

/* header */

.header {
  background-color: #1f1f1f;
  color: white;
  .header__menu {
    display: flex;
    border-bottom: 2px solid #1f1f1f;
  }
  .header__menu-item {
    padding: 10px 20px;
    transition: 0.3s;
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
.actions-section__action-button {
  padding: 10px;
  background-color: #1f1f1f;
  color: #ffffff;
  border: 2px solid #1f1f1f;
  border-radius: 5px;
  transition: 0.3s;
  outline: none;
}
.actions-section__action-button:hover {
  background-color: #f2f2f2;
  color: #1f1f1f;
}
.actions-section__item-list {
  display: flex;
  justify-content: center;
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
  border: 2px solid #1f1f1f;
  border-radius: 5px;
  transition: 0.3s;
  width: 100%;
}
.investment-section__item:hover {
  background-color: #1f1f1f;
  color: #f2f2f2;
}
.investment-section__item:disabled {
  opacity: 0.5;
}
.investment-section__cost {
  font-weight: bold;
}
/* footer */

.footer {
  background-color: #1f1f1f;
  color: #f2f2f2;
  text-align: right;
  .container {
    padding: 15px 10px;
  }
}
</style>
