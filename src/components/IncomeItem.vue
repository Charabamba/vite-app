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
});

const emit = defineEmits(["purchase"]);

function purchaseItem(id) {
  emit("purchase", id);
}
</script>

<template>
  <div>
    <p>
      {{ props.name }} - {{ props.price }}
    </p>
    <a-button
      type="primary"
      :disabled="props.disabled"
      @click="purchaseItem(props.id)"
    >
      +{{ props.income }}
    </a-button>
    <p v-if="props.quantity">
      purchased {{ props.quantity }}
    </p>
  </div>
</template>

<style lang="scss">
</style>