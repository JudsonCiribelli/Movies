import axios from "axios";
// BASE DA URL: https://api.themoviedb.org/3
// URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=7aacaa244c0ed846864d6b93f8125057&language=pt-BR
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default api;
