<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <li>
    <p>
      <b>
        {{ props.name }}:
      </b>
      {{ props.description }}
    </p>
  </li>
</template>

<style lang="scss">
</style>