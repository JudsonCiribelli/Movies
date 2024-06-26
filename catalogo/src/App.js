import RouteApp from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <RouteApp />
    </div>
  );
}

export default App;
