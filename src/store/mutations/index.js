import { ADD_STAR_WARS_PERSONS, EDIT_STAR_WARS_PERSON } from "./types";

export default {
  [ADD_STAR_WARS_PERSONS](state, persons) {
    state.star_wars_persons.push(...persons);
  },
  [EDIT_STAR_WARS_PERSON]({ star_wars_persons }, { originalName, person }) {
    const idx = star_wars_persons.findIndex((p) => p.name === originalName);
    star_wars_persons.splice(idx, 1, person);
  },
};
