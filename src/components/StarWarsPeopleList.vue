<template>
  <list>
    <list-item></list-item>
  </list>
</template>

<script>
import ListItem from "./List/ListItem";
import List from "./List/List";

export default {
  name: "StarWarsPeopleList",
  components: {
    List,
    ListItem,
  },
};
</script>

<style lang="scss" scoped></style>
