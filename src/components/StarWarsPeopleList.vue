<template>
  <list>
    <list-item v-for="(person, idx) in people" :key="person.name">
      <template slot="prepend">
        {{ idx }}
      </template>

      <template slot="append">
        {{ person.eye_color }}
      </template>

      <span :style="{ color: person.eye_color || 'black' }">
        {{ person.name }}
      </span>
    </list-item>
  </list>
</template>

<script>
import ListItem from "./List/ListItem";
import List from "./List/List";
import { mapGetters } from "vuex";
import { GET_STAR_WARS_PERSONS } from "../store/getters/types";

export default {
  name: "StarWarsPeopleList",
  components: {
    List,
    ListItem,
  },
  computed: {
    ...mapGetters({
      people: GET_STAR_WARS_PERSONS,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
