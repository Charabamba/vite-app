<script>
import gsap from "gsap";

export default {
  props: {
    number: {
      type: Number,
      default: 0,
    },
    animationSeconds: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tweenedNumber: 0,
    };
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, {
        duration: this.animationSeconds,
        tweenedNumber: newValue,
        ease: "none",
      });
    },
  },
  mounted() {
    gsap.to(this.$data, { duration: 0, tweenedNumber: this.number });
  },
};
</script>

<template>
  <span>{{ animatedNumber }}</span>
</template>