<template>
  <span
    class="badge-container"
    :style="{ backgroundColor: color, fontSize: `${size}px` }"
  >
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "Badge",
  props: {
    text: {
      default: "",
      type: [String, Number],
    },
    color: {
      default: "grey",
      type: String,
    },
    size: {
      default: 14,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.badge-container {
  border-radius: 1em;
  padding: 0 5px;
  vertical-align: super;
}
</style>
