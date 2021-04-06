<template>
  <div class="field-container" :class="containerClass">
    <div class="label">{{ label }}</div>
    <input
      class="input"
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
      @focus="focused = true"
      @blur="focused = false"
    />
  </div>
</template>

<script>
export default {
  name: "vField",
  data() {
    return {
      focused: false,
    };
  },
  props: {
    value: {
      default: "",
    },
    label: {
      default: "",
    },
  },
  computed: {
    containerClass() {
      return {
        "field-container--focused": this.focused,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/brand-colors";

$padding-left: 5px;
.field-container {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  background-color: white;
  margin-top: 15px;
  border-radius: 4px;
  height: 45px;
  padding-left: $padding-left;

  &.field-container--focused {
    border: 2px solid $primary;
    .label {
      color: $primary;
    }
  }

  .label {
    position: absolute;
    top: 0px;
    font-size: 11px;
  }
  .input {
    margin-top: 5px;
    border: none;
    outline: 0;
    text-decoration: none;
    padding: 16px 0 $padding-left;
  }
}
</style>
