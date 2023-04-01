<script setup>
import AvailableClickUpgrade from "@/components/AvailableClickUpgrade.vue";
import {useClickerStore} from "@/stores/clicker";

const clickerStore = useClickerStore();

function cickUpgrade(id) {
  clickerStore.buyClickUpgrade(id)
}
</script>

<template>
  <section v-if="clickerStore.availableClickUpgrades.length" class="investment-section">
    <h2 class="investment-section__title">
      Available click power upgrades:
    </h2>
    <div class="investment-section__container">
      <ul class="investment-section__item-list">
        <li v-for="item of clickerStore.availableClickUpgrades" :key="item.id">
          <AvailableClickUpgrade :id="item.id" :name="item.name" :description="item.description"
            :disabled="clickerStore.score < item.price" :price="item.price" @purchase="cickUpgrade($event)" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
