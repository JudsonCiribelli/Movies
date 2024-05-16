import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          Pagina Home
        </Route>
        <Route path="/Movies/:id" element={<Movies />}>
          Catalog de filmes
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
