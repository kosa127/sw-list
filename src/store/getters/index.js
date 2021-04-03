import { GET_STAR_WARS_PERSONS, GET_VISIBLE_STAR_WARS_PERSONS } from "./types";

export default {
  [GET_STAR_WARS_PERSONS]({ star_wars_persons }) {
    return star_wars_persons;
  },
  [GET_VISIBLE_STAR_WARS_PERSONS]({ star_wars_persons }) {
    const invalidChars = ["a", "b", "c"];
    const filter = ({ name }) => !invalidChars.includes(name[0].toLowerCase());

    return star_wars_persons.filter(filter);
  },
};
