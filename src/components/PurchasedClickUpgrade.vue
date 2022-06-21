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
  <div>
    <p>
      <b>
        {{ props.name }}:
      </b>
      {{ props.description }}
    </p>
  </div>
</template>

<style lang="scss">
</style>