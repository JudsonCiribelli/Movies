import { useEffect, useState } from "react";
import "../favoritos/favoritos.css";
import { Link, json } from "react-router-dom";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const minhaLista = localStorage.getItem("@Prime");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function Excluir(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(filtroFilmes);
    localStorage.setItem("@Prime", JSON.stringify(filtroFilmes));
  }

  return (
    <div className="Movies">
      <h1>Meus filmes</h1>

      {filmes.length === 0 && <span>Você não possui nenhum filme salvo</span>}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/Movies/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => Excluir(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Favoritos;
