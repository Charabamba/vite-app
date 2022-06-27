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
  description: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["purchase"]);
function purchase(id) {
  emit("purchase", id);
}
</script>

<template>
  <button
    class="investment-section__item"
    :disabled="props.disabled"
    @click="purchase(props.id)"
  >
    <p>
      {{ props.name }}: {{ props.description }}
    </p>
    purchase for {{ props.price }}
  </button>
</template>

<style lang="scss">
</style>