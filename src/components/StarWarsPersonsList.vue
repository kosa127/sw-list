<template>
  <list class="star-wars-persons-list">
    <list-item v-for="(person, idx) in people" :key="person.name">
      <template slot="prepend">
        {{ idx }}
      </template>

      <template slot="append">
        {{ person.eye_color }}
      </template>

      <div :style="{ color: person.eye_color || 'black' }">
        {{ person.name }}
      </div>
    </list-item>
  </list>
</template>

<script>
import ListItem from "./List/ListItem";
import List from "./List/List";
import { mapGetters, mapActions } from "vuex";
import { GET_STAR_WARS_PERSONS } from "../store/getters/types";
import { FETCH_STAR_WARS_PERSONS } from "../store/actions/types";

export default {
  name: "StarWarsPersonsList",
  components: {
    List,
    ListItem,
  },
  created() {
    try {
      this.fetchPersons(20);
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    ...mapGetters({
      people: GET_STAR_WARS_PERSONS,
    }),
  },
  methods: {
    ...mapActions({
      fetchPersons: FETCH_STAR_WARS_PERSONS,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/breakpoints";

.star-wars-persons-list {
  width: 500px;
  @media screen and (max-width: $breakpoint-sm) {
    width: 330px;
  }
}
</style>
