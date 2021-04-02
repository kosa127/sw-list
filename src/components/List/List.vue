<template>
  <div class="list-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "List",
};
</script>

<style lang="scss" scoped>
.list-container {
  max-width: 800px;
}
</style>
