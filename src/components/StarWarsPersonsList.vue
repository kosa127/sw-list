<template>
  <list class="star-wars-persons-list">
    <list-item v-for="(person, idx) in visiblePersons" :key="person.name">
      <template slot="prepend"> {{ idx + 1 }}. </template>

      <template slot="append">
        <div class="bmi-indicator-container">
          <div
            class="overweight-container"
            v-if="calculatePersonOverweight(person) > 0"
          >
            <badge
              class="overweight-badge"
              :text="getReadableOverweight(person)"
              :size="15"
            />
            <span class="material-icons-outlined bmi-icon">sick</span>
          </div>
          <div v-else>
            <span class="material-icons-outlined bmi-icon">mood</span>
          </div>
        </div>
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
import Badge from "./Badge";
import { mapGetters } from "vuex";
import { GET_VISIBLE_STAR_WARS_PERSONS } from "../store/getters/types";
import { calculateOverweight } from "../utils/BMICalculator";

export default {
  name: "StarWarsPersonsList",
  components: {
    List,
    ListItem,
    Badge,
  },
  computed: {
    ...mapGetters({
      visiblePersons: GET_VISIBLE_STAR_WARS_PERSONS,
    }),
  },
  methods: {
    getReadableOverweight(person) {
      return `+${this.calculatePersonOverweight(person)}kg`;
    },
    calculatePersonOverweight({ height, mass }) {
      return Math.round(calculateOverweight(parseInt(height), parseInt(mass)));
    },
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

  .bmi-indicator-container {
    .overweight-badge {
      margin-right: 5px;
    }
    .bmi-icon {
      font-size: 25px;
    }
  }
}
</style>
