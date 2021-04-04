<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { FETCH_STAR_WARS_PERSONS } from "./store/actions/types";

export default {
  name: "App",
  created() {
    try {
      this.fetchPersons(20);
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions({
      fetchPersons: FETCH_STAR_WARS_PERSONS,
    }),
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
}
</style>
