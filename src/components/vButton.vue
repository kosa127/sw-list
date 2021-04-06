<template>
  <button class="v-button" :brand="brand" @click="(e) => $emit('click', e)">
    <slot />
  </button>
</template>

<script>
export default {
  name: "vButton",
  props: {
    brand: {
      type: String,
      default: "primary",
      validator: (val) => {
        const brands = ["primary", "secondary", "success", "warning", "error"];

        return brands.includes(val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/brand-colors";

@mixin button-color($color) {
  color: white;
  background-color: $color;
  $hover-color: darken($color, 10%);
  box-shadow: 0 0 0 1px $color inset;

  &:hover {
    background-color: $hover-color;
    box-shadow: 0 0 0 1px $hover-color inset;
  }
}

.v-button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 6px 24px;
  text-decoration: none;
  outline: 0;

  &[brand="primary"] {
    @include button-color($primary);
  }
  &[brand="secondary"] {
    @include button-color($secondary);
  }
  &[brand="success"] {
    @include button-color($success);
  }
  &[brand="warning"] {
    @include button-color($warning);
  }
  &[brand="error"] {
    @include button-color($error);
  }
}
</style>
