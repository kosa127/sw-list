import { ADD_PERSONS, EDIT_PERSON, SET_LOADING } from "./types";

export default {
  [ADD_PERSONS](state, persons) {
    state.persons.push(...persons);
  },
  [EDIT_PERSON]({ persons }, { originalName, person }) {
    const idx = persons.findIndex((p) => p.name === originalName);
    persons.splice(idx, 1, person);
  },
  [SET_LOADING](state, value) {
    state.loading = value;
  },
};
