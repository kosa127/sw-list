import { ADD_STAR_WARS_PERSONS } from "./types";

export default {
  [ADD_STAR_WARS_PERSONS](state, persons) {
    state.star_wars_persons.push(...persons);
  },
};
