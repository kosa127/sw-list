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

export default {
  name: "StarWarsPeopleList",
  components: {
    List,
    ListItem,
  },
  computed: {
    ...mapGetters({
      people: "getStarWarsPeople",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
