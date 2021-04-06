<template>
  <div class="field-container">
    <div class="label">{{ label }}</div>
    <input
      class="input"
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "vField",
  props: {
    value: {
      default: "",
    },
    label: {
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.field-container {
  position: relative;
  width: 100%;
  background-color: white;
  margin-top: 15px;
  border-radius: 4px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  padding-left: 5px;

  .label {
    position: absolute;
    top: 0px;
    font-size: 11px;
  }
  .input {
    margin-top: 5px;
    border: none;
    width: 100%;
    outline: 0;
    text-decoration: none;
    padding: 17px 0 5px;
  }
}
</style>
