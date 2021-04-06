<template>
  <form v-if="person" class="person-form">
    <v-field v-model="person.name" label="Name" />
    <v-field v-model="person.mass" label="Weight" />
    <v-field v-model="person.height" label="Height" />
    <v-field v-model="person.eye_color" label="Eye color" />
    <v-field v-model="person.hair_color" label="Hair color" />
    <v-field v-model="person.skin_color" label="Skin color" />
    <v-field v-model="person.birth_year" label="Birth year" />

    <div class="actions-container">
      <v-button type="button" brand="secondary" @click="$emit('cancel')"
        >Cancel</v-button
      >
      <v-button type="button" brand="primary" @click="$emit('submit', person)"
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
