import { useEffect, useState } from "react";
import api from "../../services/api";
import Movies from "../Movies";
import "./home.css";
import { Link } from "react-router-dom";
//URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=7aacaa244c0ed846864d6b93f8125057&language=pt-BR

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadfilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "7aacaa244c0ed846864d6b93f8125057",
          language: "pt-BR",
          page: 1,
        },
      });
      //console.log(response.data.results.slice(0, 10));
      setMovies(response.data.results.slice(0, 15));
      setLoading(false);
    }

    loadfilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="list-movies">
        {movies.map((movies) => {
          return (
            <article key={movies.id}>
              <strong>{movies.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
                alt={movies.title}
              />
              <Link to={`/Movies/${movies.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
