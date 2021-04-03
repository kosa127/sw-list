<template>
  <div class="centered-layout-container">
    <div class="layout-body-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "CenteredLayout",
};
</script>

<style lang="scss" scoped>
@import "../assets/css/breakpoints";

.centered-layout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-image: url("/background.jpg");
  background-size: cover;

  .layout-body-container {
    max-height: 75vh;
    min-width: 350px;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 70px;
    margin: auto;
    border-radius: 50px;

    @media screen and (max-width: $breakpoint-sm) {
      padding: 30px;
    }
  }
}
</style>
