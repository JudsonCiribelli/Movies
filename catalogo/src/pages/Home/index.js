import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Pagina Home</h2>
      <Link to="/">Primeira pagina</Link> <br></br>
      <Link to="/Movies">Movies</Link>
    </div>
  );
}
export default Home;
