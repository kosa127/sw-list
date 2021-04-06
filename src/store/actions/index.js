import { FETCH_PERSONS } from "./types";
import { ADD_PERSONS, SET_LOADING } from "../mutations/types";
import SWAPIRepository from "../../repositories/SWAPIRepository";

export default {
  async [FETCH_PERSONS]({ commit }, count) {
    commit(SET_LOADING, true);
    const responses = await new SWAPIRepository().fetchPeople(count);
    const persons = responses.reduce(
      (prev, curr) => [...prev, ...curr.data.results],
      []
    );
    commit(ADD_PERSONS, persons);
    commit(SET_LOADING, false);
  },
};
