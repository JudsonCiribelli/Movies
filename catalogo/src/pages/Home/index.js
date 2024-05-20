import { useEffect, useState } from "react";
import api from "../../services/api";
import Movies from "../Movies";
import "./home.css";
import { Link } from "react-router-dom";
//URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=7aacaa244c0ed846864d6b93f8125057&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
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
      setFilmes(response.data.results.slice(0, 10));
    }
    loadfilmes();
  }, []);

  return (
    <div className="container">
      <div className="list-movies">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filmes/${Movies.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
