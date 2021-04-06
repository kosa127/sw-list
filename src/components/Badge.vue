<template>
  <span class="badge-container">
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
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/brand-colors";
.badge-container {
  color: white;
  background-color: $primary;
  border-radius: 1em;
  padding: 0 5px;
  vertical-align: super;
}
</style>
