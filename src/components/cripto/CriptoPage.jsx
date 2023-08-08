import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CriptoPage = () => {
  const params = useParams();

  const API_URL = import.meta.env.VITE_API_URL_2;

  const [criptoPage, setCriptoPage] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}${params.id}`)
      .then((data) => {
        setCriptoPage(data.data.data);
      })
      .catch(() => {
        console.error("La peticción falló");
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}${params.id}?history=d1`)
      .then((data) => {
        console.log(data);
        console.log(data.data.data);
        setHistory(data.data.data);
      })
      .catch(() => {
        console.error("La peticción falló");
      });
  }, []);

  if (!criptoPage) return <span>Cargando...</span>;

  return (
    <>
      <h1>Soy la criptomoneda {params.id}</h1>
      <div className="info">
        <ul>
          <li>
            <span className="label">Nombre: </span>
            {criptoPage.name}
          </li>
          <li>
            <span className="label">Símbolo: </span>
            {criptoPage.symbol}
          </li>
          <li>
            <span className="label">Cambios en las últimas 24 horas: </span>
            {criptoPage.changePercent24Hr}
          </li>
          <li>
            <span className="label">Capitalización de mercado: </span>
            {criptoPage.marketCapUsd}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CriptoPage;
