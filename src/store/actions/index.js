import { FETCH_STAR_WARS_PERSONS } from "./types";
import { ADD_STAR_WARS_PERSONS } from "../mutations/types";
import SWAPIRepository from "../../repositories/SWAPIRepository";

export default {
  async [FETCH_STAR_WARS_PERSONS]({ commit }, count) {
    const responses = await new SWAPIRepository().fetchPeople(count);
    const persons = responses.reduce(
      (prev, curr) => [...prev, ...curr.data.results],
      []
    );
    commit(ADD_STAR_WARS_PERSONS, persons);
  },
};
