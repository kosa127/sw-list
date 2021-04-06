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
      default: "default",
      validator: (val) => {
        const brands = ["default", "primary", "success", "warning", "error"];

        return brands.includes(val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
$default-color: #9f9f9f;
$default-hover-color: #2c3e50;
$primary-color: #22a7f0;
$primary-hover-color: #0d7cb9;
$success-color: #019875;
$success-hover-color: #01654e;
$warning-color: #f4b350;
$warning-hover-color: #e9920f;
$error-color: #d91e18;
$error-hover-color: #941410;
$disabled-color: #dadada;

@mixin button-color($color, $hover-color) {
  color: $color;
  box-shadow: 0 0 0 1px $color inset;
  &:hover {
    color: $hover-color;
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

  &[brand="default"] {
    @include button-color($default-color, $default-hover-color);
  }
  &[brand="primary"] {
    @include button-color($primary-color, $primary-hover-color);
  }
  &[brand="success"] {
    @include button-color($success-color, $success-hover-color);
  }
  &[brand="warning"] {
    @include button-color($warning-color, $warning-hover-color);
  }
  &[brand="error"] {
    @include button-color($error-color, $error-hover-color);
  }
}
</style>
