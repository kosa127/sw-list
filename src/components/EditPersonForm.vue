<template>
  <form class="person-form">
    <v-field v-model="localPerson.name" label="Name" />
    <v-field v-model="mass" type="number" label="Weight" />
    <v-field v-model="localPerson.height" type="number" label="Height" />
    <v-field v-model="localPerson.eye_color" label="Eye color" />
    <v-field v-model="localPerson.hair_color" label="Hair color" />
    <v-field v-model="localPerson.skin_color" label="Skin color" />
    <v-field v-model="localPerson.birth_year" label="Birth year" />

    <div class="actions-container">
      <v-button type="button" brand="secondary" @click="$emit('cancel')"
        >Cancel</v-button
      >
      <v-button
        type="button"
        brand="primary"
        @click="$emit('submit', localPerson)"
        >Save</v-button
      >
    </div>
  </form>
</template>

<script>
import vField from "./vField";
import vButton from "./vButton";

export default {
  name: "EditPersonForm",
  components: { vField, vButton },
  props: {
    person: {
      default: null,
      type: Object,
    },
  },
  data() {
    return {
      localPerson: Object.assign({}, this.person),
    };
  },
  computed: {
    mass: {
      get() {
        const { mass } = this.localPerson;

        // often case with SWAPI
        if (!mass || mass === "unknown") return 0;

        // Jabba has mass "1,358"
        if (mass.includes(",")) return mass.split(",").join(".");

        return mass;
      },
      set(val) {
        this.localPerson.mass = val;
      },
    },
    height: {
      get() {
        const { height } = this.localPerson;

        // often case with SWAPI
        if (!height || height === "unknown") return 0;

        return height;
      },
      set(val) {
        this.localPerson.height = val;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.person-form {
  .actions-container {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
