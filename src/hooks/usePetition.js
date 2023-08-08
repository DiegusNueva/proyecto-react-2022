import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) => {
  const API_URL = import.meta.env.VITE_API_URL_2;

  const [data, setData] = useState();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    axios
      .get(`${API_URL}${endpoint}`)
      .then((data) => {
        setData(data.data.data);
        setCargando(false);
      })
      .catch(() => {
        setCargando(false);
        console.error("La peticción falló");
      });
  }, []);

  return [data, cargando];
};

export default usePetition;
