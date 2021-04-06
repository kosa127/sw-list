<template>
  <div class="form-container">
    <loader v-if="loading" />
    <edit-person-form
      v-else
      :person="person"
      @submit="handleSubmit"
      @cancel="handleCancel"
    />
  </div>
</template>

<script>
import EditPersonForm from "../components/EditPersonForm";
import Loader from "../components/Loader";
import { EDIT_PERSON } from "../store/mutations/types";
import { mapState } from "vuex";

export default {
  name: "Edit",
  components: { EditPersonForm, Loader },
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
    ...mapState({
      loading: "loading",
    }),
    originalPerson() {
      const { name } = this.$route.params;
      const { persons } = this.$store.state;

      return persons.find((p) => p.name === name);
    },
  },
  watch: {
    // person can be fetched later (going directly to edit page)
    loading(value) {
      if (value) return;

      // not valid, go back to persons list
      if (!this.originalPerson) this.$router.push({ name: "Home" });

      this.person = Object.assign({}, this.originalPerson);
    },
  },
  methods: {
    handleSubmit(person) {
      const { name } = this.originalPerson;
      this.$store.commit(EDIT_PERSON, { originalName: name, person });
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
