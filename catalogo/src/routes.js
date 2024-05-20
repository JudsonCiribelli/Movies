import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import Erro from "./pages/Err/Err";

function RouteApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Movies/:id" element={<Movies />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouteApp;
