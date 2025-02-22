import { useState } from "react";
import axios from "axios";
import styles from "./Registro.module.css"; // Importamos los estilos CSS

function Registro() {
  const [inputs, setInputs] = useState({});
  const [mensaje, setMensaje] = useState("");

  const handleChange = (evento) => {
    const nombre = evento.target.name;
    const valor = evento.target.value;
    setInputs((entradas) => ({ ...entradas, [nombre]: valor }));
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    try {
      const respuesta = await axios.post("http://localhost:5000/registro", inputs);
      setMensaje(respuesta.data.message);
      setInputs({}); // Limpia el formulario
    } catch (error) {
      setMensaje("Error al registrar usuario");
    }
  };

  return (
    <div className={styles["form-container"]}>
      <center>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre y Apellido:
          <input type="text" name="nombreyapellido" value={inputs.nombreyapellido || ""} onChange={handleChange} />
        </label>
        <label>Usuario:
          <input type="text" name="usuario" value={inputs.usuario || ""} onChange={handleChange} />
        </label>
        <label>Correo:
          <input type="email" name="correo" value={inputs.correo || ""} onChange={handleChange} />
        </label>
        <label>Contraseña:
          <input type="password" name="contraseña" value={inputs.contraseña || ""} onChange={handleChange} />
        </label>
        <button type="submit">Registrarse</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
      </center>
    </div>
  );
}

export default Registro;