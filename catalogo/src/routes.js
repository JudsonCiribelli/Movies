import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Movies/:id" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouteApp;
