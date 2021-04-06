<template>
  <div class="home-container">
    <loader v-if="loading" />
    <div class="list-container" v-else>
      <div class="gender-summary">
        <div>Total number of women: {{ womenCount }}</div>
        <div>Total number of men: {{ menCount }}</div>
        <div>Other or unknown gender: {{ othersCount }}</div>
      </div>
      <star-wars-persons-list />
    </div>
  </div>
</template>

<script>
import StarWarsPersonsList from "../components/StarWarsPersonsList";
import Loader from "../components/Loader";
import { mapGetters, mapState } from "vuex";
import {
  GET_WOMEN_COUNT,
  GET_MEN_COUNT,
  GET_OTHER_GENDER_PERSONS_COUNT,
} from "../store/getters/types";

export default {
  name: "Home",
  components: { StarWarsPersonsList, Loader },
  computed: {
    ...mapGetters({
      womenCount: GET_WOMEN_COUNT,
      menCount: GET_MEN_COUNT,
      othersCount: GET_OTHER_GENDER_PERSONS_COUNT,
    }),
    ...mapState({
      loading: "loading",
    }),
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  height: 90%;

  .list-container {
    height: 100%;

    .gender-summary {
      padding: 0 0 10px 10px;
      font-size: 13px;
      color: white;
    }
  }
}
</style>
