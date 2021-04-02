<template>
  <div class="list-item-container">
    <div class="prepend-slot-container" v-if="$slots.prepend">
      <slot name="prepend" />
    </div>

    <!-- default slot should always be main content -->
    <div class="content-slot-container">
      <slot />
    </div>

    <div class="append-slot-container" v-if="$slots.append">
      <slot name="append" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
};
</script>

<style lang="scss" scoped>
$backgroundColor: rgb(255, 255, 255);
$sectionPadding: 0 10px;

.list-item-container {
  display: flex;
  height: 50px;
  align-items: center;
  background-color: $backgroundColor;
  box-shadow: 1px 1px 5px #000000b4;
  cursor: pointer;
  overflow: hidden;
  font-size: 17px;

  &:hover {
    background-color: darken($backgroundColor, 5%);
  }

  .prepend-slot-container {
    min-width: 30px;
    padding: $sectionPadding;
  }

  .content-slot-container {
    flex-grow: 1;
    display: flex;
    padding: $sectionPadding;
  }

  .append-slot-container {
    min-width: 30px;
    padding: $sectionPadding;
  }
}
</style>
