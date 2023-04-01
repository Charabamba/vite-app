<script setup>
import {useClickerStore} from "@/stores/clicker";

const clickerStore = useClickerStore();

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

function changeTheme() {
  clickerStore.switchTheme()
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <ul class="header__menu">
          <li v-for="link of links" :key="link.url" class="header__menu-item">
            <router-link :to="link.url">
              {{ link.title }}
            </router-link>
          </li>
          <li class="header__menu-item_right">
            <button class="switch-theme__button" @click="changeTheme">
              <svg class="switch-theme__icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.5V3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5Z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
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
</style>