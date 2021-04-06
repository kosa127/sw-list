import * as types from "./types";

export default {
  [types.GET_VISIBLE_PERSONS]({ persons }) {
    const invalidChars = ["a", "b", "c"];
    const filter = ({ name }) => !invalidChars.includes(name[0].toLowerCase());

    return persons.filter(filter);
  },
  [types.GET_MEN_COUNT]({ persons }) {
    return persons.filter(({ gender }) => gender === "male").length;
  },
  [types.GET_WOMEN_COUNT]({ persons }) {
    return persons.filter(({ gender }) => gender === "female").length;
  },
  [types.GET_OTHER_GENDER_PERSONS_COUNT]({ persons }) {
    const filter = ({ gender }) => !["male", "female"].includes(gender);

    return persons.filter(filter).length;
  },
};
