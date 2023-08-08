import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigation = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(undefined);

  const submit = (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null);
    console.log(user);
    axios
      .post(`https://reqres.in/api/login`, user)
      .then((data) => {
        setCargando(false);
        localStorage.setItem("tokenEDmarket", data.data.token);
        navigation("/");
      })
      .catch((error) => {
        setCargando(false);
        console.log(error);
        setError(error.response.data.error);
      });
  };

  if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />;

  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            type="email"
            name="email"
          ></input>
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
          ></input>
        </div>
        <div className="submit">
          <input
            type="submit"
            value={cargando ? "Cargando..." : "Ingresar"}
          ></input>
        </div>
      </form>
      {error && <span className="error">Error: {error}</span>}
    </div>
  );
};

export default Login;
