<template>
  <list class="star-wars-persons-list">
    <list-item v-for="(person, idx) in visiblePersons" :key="person.name">
      <template slot="prepend"> {{ idx + 1 }}. </template>

      <template slot="append">
        <badge
          class="overweight-badge"
          :text="getReadableOverweight(person)"
          v-if="calculatePersonOverweight(person) > 0"
        />
        <span class="material-icons-outlined bmi-icon">{{
          calculatePersonOverweight(person) > 0 ? "sick" : "mood"
        }}</span>

        <v-button
          class="edit-btn"
          brand="primary"
          @click="() => handleEditBtnClick(person)"
        >
          Edit
        </v-button>
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
import Badge from "./Badge";
import vButton from "./vButton";

import { mapGetters } from "vuex";
import { GET_VISIBLE_PERSONS } from "../store/getters/types";
import { calculateOverweight } from "../utils/BMICalculator";

export default {
  name: "StarWarsPersonsList",
  components: {
    List,
    ListItem,
    Badge,
    vButton,
  },
  computed: {
    ...mapGetters({
      visiblePersons: GET_VISIBLE_PERSONS,
    }),
  },
  methods: {
    getReadableOverweight(person) {
      return `+${this.calculatePersonOverweight(person)}kg`;
    },
    calculatePersonOverweight({ height, mass }) {
      return Math.round(calculateOverweight(parseInt(height), parseInt(mass)));
    },
    handleEditBtnClick({ name }) {
      this.$router.push({ name: "Edit", params: { name } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/breakpoints";
@import "../assets/css/brand-colors";

.star-wars-persons-list {
  width: 500px;
  @media screen and (max-width: $breakpoint-sm) {
    width: 100vw;
  }

  .edit-btn {
    vertical-align: super;
  }

  .overweight-badge {
    font-size: 13px;
    padding: 0 5px;
    height: 17px;
    background-color: $primary;
  }
  .bmi-icon {
    font-size: 25px;
    margin: 0 5px;
    color: $primary;
  }
}
</style>
