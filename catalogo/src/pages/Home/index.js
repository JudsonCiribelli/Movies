import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
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
      console.log(response.data);
    }
    loadfilmes();
  }, []);

  return (
    <div>
      <h2>Pagina Home</h2>
      <Link to="/">Primeira pagina</Link> <br></br>
      <Link to="/Movies">Movies</Link>
    </div>
  );
}
export default Home;
