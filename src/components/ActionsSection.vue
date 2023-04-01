<script setup>
import {useClickerStore} from "@/stores/clicker";

const clickerStore = useClickerStore();

function handleClick() {
  clickerStore.handleClick()
}
</script>

<template>
  <section class="actions-section">
    <div class="actions-section__container">
      <ul class="actions-section__item-list">
        <li class="actions-section__item">
          <button class="actions-section__action-button" @click="handleClick">
            +
            <span class="actions-section__action-span">
              {{ clickerStore.clickPower }}
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
  background-color: var(--background-main);
  color: var(--color-main);
  border: 2px solid var(--border-main);
  border-radius: 5px;
  transition: 0.3s;
  outline: none;

  &:hover {
    background-color: var(--background-secondary);
    color: var(--color-secondary);
  }
}

.actions-section__item-list {
  display: flex;
  justify-content: center;
}
</style>