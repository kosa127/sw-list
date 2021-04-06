<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
@import "../assets/css/brand-colors";
$inactive-color: rgba(255, 255, 255, 0.2);

.loader {
  font-size: 10px;
  position: relative;
  border: 1em solid $inactive-color;
  border-left: 1em solid $primary;
  transform: translateZ(0);
  animation: rotate 1s infinite linear;
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: auto;
}

@-webkit-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
