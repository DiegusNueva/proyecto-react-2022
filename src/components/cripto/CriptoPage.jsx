import { useParams } from "react-router-dom";
import usePetition from "../../hooks/usePetition";

const CriptoPage = () => {
  const params = useParams();

  const [cripto, cargandoCripto] = usePetition(`${params.id}`);
  //const [history, cargandoHistory] = usePetition(`${params.id}?history=d1`)

  if(cargandoCripto) return <span>Cargando...</span>

  if (!cripto) return <span>Cargando...</span>;

  return (
    <>
      <h1>Soy la criptomoneda {params.id}</h1>
      <div className="info">
        {cripto && (
          <ul>
            <li>
              <span className="label">Nombre: </span>
              {cripto.name}
            </li>
            <li>
              <span className="label">Símbolo: </span>
              {cripto.symbol}
            </li>
            <li>
              <span className="label">Cambios en las últimas 24 horas: </span>
              {cripto.changePercent24Hr}
            </li>
            <li>
              <span className="label">Capitalización de mercado: </span>
              {cripto.marketCapUsd}
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default CriptoPage;

// <h2>HISTORIAL</h2>
// <div>
// {
//   history1 && (
//     <table>
//   <thhead>
//     <tr>
//       <th>Fecha</th>
//       <th>Precio</th>
//     </tr>
//   </thhead>
//   <tbody>
//     {
//       history.map(({ name, priceUsd, rank}) => (
//         <tr key={name}>
//           <td>{rank}</td>
//           <td>{priceUsd}</td>
//         </tr>
//       ))
//     }
//   </tbody>
// </table>
//   )
// }
// </div>
