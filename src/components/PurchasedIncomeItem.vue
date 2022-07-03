<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div>
    {{ `${props.name} - ${props.quantity}` }}
  </div>
</template>

<style>
</style>