<template>
  <div class="field-container" :class="containerClass">
    <div class="label">{{ label }}</div>
    <input
      class="input"
      :value="value"
      :type="type"
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
    type: {
      default: "text",
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
$label-translate: 3px;
.field-container {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  background-color: white;
  margin-top: 15px;
  border-radius: 4px;
  height: 45px;
  padding-left: $padding-left;
  border: 2px solid $primary;

  &.field-container--focused {
    .label {
      transition: transform 0.5s ease;
      transform: translateY(-$label-translate);
    }
  }

  .label {
    color: $primary;
    position: absolute;
    top: $label-translate;
    font-size: 11px;
  }
  .input {
    margin-top: 5px;
    width: 100%;
    border: none;
    outline: 0;
    text-decoration: none;
    padding: 16px 0 $padding-left;
  }
}
</style>
