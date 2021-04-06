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
  max-height: 100%;
  overflow-y: scroll;
  border-radius: 1rem;
}
</style>
