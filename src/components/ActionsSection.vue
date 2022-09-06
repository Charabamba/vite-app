<script setup>
import { useStore } from "../store";
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
.actions-section__action-button {
  padding: 10px;
  background-color: #1f1f1f;
  color: #ffffff;
  border: 2px solid #1f1f1f;
  border-radius: 5px;
  transition: 0.3s;
  outline: none;
  &:hover {
    background-color: #f2f2f2;
    color: #1f1f1f;
  }
}
.actions-section__item-list {
  display: flex;
  justify-content: center;
}
</style>