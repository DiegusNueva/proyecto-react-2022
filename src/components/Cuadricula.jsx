import { useEffect, useState } from "react";
import axios from "axios";
import Cripto from "./cripto/Cripto";
import "./Cuadricula.css";

function Cuadricula() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [criptos, setCriptos] = useState();

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        console.log(data);
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error("La peticción falló");
      });
  }, [] );

  if (!criptos) return <span>Cargando...</span>;

  return (
    <div className="app-container">
      <h1>Lista de Criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
           <Cripto id={id} key={id} name={name} priceUsd={priceUsd} symbol={symbol} changePercent24Hr={changePercent24Hr}/>
        ))
        }
      </div>
    </div>
  );
}

export default Cuadricula;
