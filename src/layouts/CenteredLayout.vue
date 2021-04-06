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
    background-color: rgba(108, 135, 223, 0.205);
    padding: 70px;
    margin: auto;
    border-radius: 1rem;

    @media screen and (max-width: $breakpoint-sm) {
      padding: 30px;
    }
  }
}
</style>
