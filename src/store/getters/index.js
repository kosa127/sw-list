import { GET_VISIBLE_PERSONS } from "./types";

export default {
  [GET_VISIBLE_PERSONS]({ persons }) {
    const invalidChars = ["a", "b", "c"];
    const filter = ({ name }) => !invalidChars.includes(name[0].toLowerCase());

    return persons.filter(filter);
  },
};
