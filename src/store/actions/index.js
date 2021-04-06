import { FETCH_PERSONS } from "./types";
import { ADD_PERSONS } from "../mutations/types";
import SWAPIRepository from "../../repositories/SWAPIRepository";

export default {
  async [FETCH_PERSONS]({ commit }, count) {
    const responses = await new SWAPIRepository().fetchPeople(count);
    const persons = responses.reduce(
      (prev, curr) => [...prev, ...curr.data.results],
      []
    );
    commit(ADD_PERSONS, persons);
  },
};
