<script setup>
const props = defineProps({
  id: {
    type: Number,
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
  <div>
    <p>
      {{ props.name }}: {{ props.description }}
    </p>
    <a-button
      type="primary"
      :disabled="props.disabled"
      @click="purchase(props.id)"
    >
      purchase for {{ props.price }}
    </a-button>
  </div>
</template>

<style lang="scss">
</style>