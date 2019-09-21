import axios from "axios";

const genreApiEndpoint = "http://localhost:3900/api/movies";

export function getGenres() {
  return axios.get(genreApiEndpoint);
}
