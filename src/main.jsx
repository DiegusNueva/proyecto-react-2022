import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagina404 from "./components/404.jsx";
import Home from "./components/Home";
import Cuadricula from "./components/Cuadricula";
import CriptoPage from "./components/cripto/CriptoPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/criptomonedas" element={<App />}>
        <Route index element={<Cuadricula />} />
        <Route path=":id" element={<CriptoPage />} />
      </Route>
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
);
