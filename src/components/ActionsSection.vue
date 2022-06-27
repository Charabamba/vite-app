<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

function handleClick() {
  store.dispatch("handleClick");
}
const clickPower = computed(() => store.getters.getClickPowerValue);
</script>

<template>
  <section class="actions-section">
    <div class="actions-section__container">
      <ul class="actions-section__item-list">
        <li class="actions-section__item">
          <button
            class="actions-section__action-button"
            @click="handleClick"
          >
            +
            <span class="actions-section__action-span">
              {{ clickPower }}
            </span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
</style>