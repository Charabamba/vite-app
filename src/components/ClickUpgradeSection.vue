<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import AvailableClickUpgrade from "@/components/AvailableClickUpgrade.vue";

const store = useStore();
const score = computed(() => store.getters.getCurrentScore);

const availableClickUpgrades = computed(
  () => store.getters.availableClickUpgrades
);

function cickUpgrade(id) {
  store.dispatch("buyClickUpgrade", id);
}
</script>

<template>
  <section
    v-if="availableClickUpgrades.length"
    class="investment-section"
  >
    <h2 class="investment-section__title">
      Available click power upgrades:
    </h2>
    <div class="investment-section__container">
      <ul class="investment-section__item-list">
        <li
          v-for="item of availableClickUpgrades"
          :key="item.id"
        >
          <AvailableClickUpgrade
            :id="item.id"
            :name="item.name"
            :description="item.description"
            :disabled="score < item.price"
            :price="item.price"
            @purchase="cickUpgrade($event)"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
</style>
