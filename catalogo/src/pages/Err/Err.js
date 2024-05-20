import { Link } from "react-router-dom";
import "../Err/erro.css";

function Erro() {
  return (
    <div className="not-Found">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to={"/Home"}>Pagina de filmes</Link>
    </div>
  );
}
export default Erro;
