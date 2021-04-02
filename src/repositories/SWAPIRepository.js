import Repository from "./Repository";
import axios from "axios";

class SWAPIRepository extends Repository {
  url = "https://swapi.dev/api";

  async fetchPeople(count = 10) {
    // this api can provide only 10 items per page
    const perPage = 10;
    const pagePromises = [];
    const numberOfPages = Math.ceil(count / perPage);

    // fetch first page to check total count of available items
    const firstPageResponse = this.fetchPeoplePage(1);
    pagePromises.push(firstPageResponse);
    const { data } = await firstPageResponse;
    const availablePages = Math.ceil(data.count / perPage);

    // fetch rest of pages
    for (let i = 2; i <= numberOfPages && i <= availablePages; i++) {
      pagePromises.push(this.fetchPeoplePage(i));
    }

    return Promise.all(pagePromises);
  }

  fetchPeoplePage(page = 1) {
    return axios.get(`${this.url}/people/?page=${page}`);
  }
}

export default SWAPIRepository;
