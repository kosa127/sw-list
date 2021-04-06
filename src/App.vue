<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { FETCH_PERSONS } from "./store/actions/types";

export default {
  name: "App",
  created() {
    try {
      this.fetchPersons(100);
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions({
      fetchPersons: FETCH_PERSONS,
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
