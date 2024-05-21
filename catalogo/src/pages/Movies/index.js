import { useEffect, useState } from "react";
import { useParams, useNavigate, json } from "react-router-dom";
import api from "../../services/api";
import "../Movies/movie.css";
import { toast } from "react-toastify";

function Movies() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "28fc232cc001c31e8a031f419d0a14ca",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("FILME NAO ENCONTRADO");
          navigate("/Home", { replace: true });
        });
    }

    loadFilme();

    return () => {
      console.log("COMPONENTE FOI DESMONTADO");
    };
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@Prime");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === movie.id
    );
    if (hasFilme) {
      toast.warn("Este filme ja está na sua lista!");
      return;
    }
    filmesSalvos.push(movie);
    localStorage.setItem("@Prime", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="container1">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="container2">
        <h1>{movie.title}</h1>
        <span>
          <strong>Sinopse: </strong>
          {movie.overview}
        </span>
        <strong>Popularidade: {movie.popularity}</strong>
        <strong>Data de lançamento: {movie.release_date}</strong>
        <strong>Avaliação: {movie.vote_average} /10</strong>
        <div className="area-buttons">
          <button onClick={salvarFilme}>Salvar</button>
          <button>
            <a
              target="blank"
              rel="external"
              href={`https://youtube.com/results?search_query=${movie.title} trailer`}
            >
              Trailer
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Movies;
