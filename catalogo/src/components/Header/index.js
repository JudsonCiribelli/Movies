import "../Header/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="logo" to="/Home">
        JC Prime
      </Link>
      <Link className="favoritos" to="/favoritos">
        Meus filmes
      </Link>
    </header>
  );
}

export default Header;
