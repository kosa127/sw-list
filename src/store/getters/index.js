import { GET_STAR_WARS_PERSONS } from "./types";

export default {
  [GET_STAR_WARS_PERSONS]({ star_wars_persons }) {
    return star_wars_persons;
  },
};
