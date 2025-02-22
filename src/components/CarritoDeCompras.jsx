import contexto from "../contexto/contexto";
import { useContext } from "react";

import carrito from "./carrito.png"
import styles from "./CarritoDeCompras.module.css"

function CarritoDeCompras() {



    const { productoSeleccionado, eliminarProductoSeleccionado } = useContext(contexto);
    const total = productoSeleccionado.reduce((acc, producto) => acc + producto.precio, 0);
    const totalFormateado = total.toLocaleString("es-ES", {
      style: "currency",
      currency: "USD"
    });

    return (
        <>
            <center>
                <h1>Usted Esta Comprando <b>{productoSeleccionado.length}</b> Productos</h1>

            </center>

            <div>


                <center>
                    <img src={carrito} alt="fotocarrito" />
                    <div className="table-container">
                        <h2>Productos Seleccionados</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Imagen</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productoSeleccionado.map((producto) => (
                                    <tr key={producto.id}>
                                        <td>{producto.nombre}</td>
                                        <td>${producto.precio.toFixed(2)}</td>
                                        <td>
                                            <img src={producto.imagen} alt={producto.nombre} className="product-image" />
                                        </td>
                                        <td><button onClick={() => eliminarProductoSeleccionado(producto.id)}>❌Eliminar</button></td>
                                    </tr>

                                ))}

                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><strong><h1>Total:</h1></strong></td>
                                    <td><strong><h2>{totalFormateado}</h2></strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>


                </center>



            </div>
            
        </>
    )

}


export default CarritoDeCompras;