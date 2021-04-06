<template>
  <div class="form-container">
    <edit-person-form
      :person="person"
      @submit="handleSubmit"
      @cancel="handleCancel"
    />
  </div>
</template>

<script>
import EditPersonForm from "../components/EditPersonForm";
import { GET_STAR_WARS_PERSONS } from "../store/getters/types";
import { EDIT_STAR_WARS_PERSON } from "../store/mutations/types";

export default {
  name: "Edit",
  components: { EditPersonForm },
  data() {
    return {
      person: null,
    };
  },
  created() {
    // person is already fetched, so just assign it
    this.person = Object.assign({}, this.originalPerson);
  },
  computed: {
    originalPerson() {
      const { name } = this.$route.params;
      const persons = this.$store.getters[GET_STAR_WARS_PERSONS];

      return persons.find((p) => p.name === name);
    },
  },
  watch: {
    // person can be fetched later (going directly to edit page)
    originalPerson(value) {
      this.person = Object.assign({}, value);
    },
  },
  methods: {
    handleSubmit(person) {
      const { name } = this.originalPerson;
      this.$store.commit(EDIT_STAR_WARS_PERSON, { originalName: name, person });
      this.$router.push({ name: "Home" });
    },
    handleCancel() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  .action-btn {
    padding: 0;

    .action-anchor {
      text-decoration: none;
      color: inherit;
      display: block;
      padding: 6px 24px;
    }
  }
}
</style>
