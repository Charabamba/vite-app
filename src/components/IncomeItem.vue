<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["purchase"]);

function purchaseItem(id) {
  emit("purchase", id);
}
</script>

<template>
  <button
    class="investment-section__item"
    :disabled="props.disabled"
    @click="purchaseItem(props.id)"
  >
    get
    <span class="investment-section__points">
      +{{ props.income }}
    </span>
    income for
    <span class="investment-section__cost">
      {{ props.price }}
    </span>
    point
  </button>
  <p v-if="props.quantity">
    purchased {{ props.quantity }}
  </p>
</template>

<style lang="scss">
</style>