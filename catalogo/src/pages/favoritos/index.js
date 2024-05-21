import { useEffect, useState } from "react";
import "../favoritos/favoritos.css";
import { Link } from "react-router-dom";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const minhaLista = localStorage.getItem("@Prime");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  return (
    <div className="Movies">
      <h1>Meus filmes</h1>
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/Movies/${item.id}`}>Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Favoritos;
