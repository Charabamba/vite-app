<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore } from "vuex";
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
        <a-menu-item
          v-for="link of links"
          :key="link.url"
        >
          <router-link :to="link.url">
            {{ link.title }}
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 32px 50px 0">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view />
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
