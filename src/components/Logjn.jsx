import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [inputs, setInputs] = useState({ usuario: "", contraseña: "" });
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    try {
      const respuesta = await axios.post("http://localhost:5000/login", inputs);
      localStorage.setItem("token", respuesta.data.token);

      setMensaje("Inicio de sesion exitoso");
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      setMensaje("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={styles["form-container"]}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario
          <input
            type="text"
            name="usuario"
            value={inputs.usuario}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contraseña
          <input
            type="password"
            name="contraseña"
            value={inputs.contraseña}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Login;
