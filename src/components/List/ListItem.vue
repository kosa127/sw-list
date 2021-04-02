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

<style lang="scss" scoped></style>
