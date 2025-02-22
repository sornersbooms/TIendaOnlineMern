import contexto from "./contexto.js"
import productos from "../javascript/productos.js"
import { useState } from "react"



function ContextoProvider({ children }) {
   
    const [productoSeleccionado, setProductoSeleccionado] = useState([])


   



    const productosSeleccionados = (nombre, descripcion, precio, imagen) => {
        setProductoSeleccionado(prevProductos => {
            const nuevoProducto = {
                id: crypto.randomUUID(),
                nombre: nombre,
                descripcion: descripcion,
                precio: precio,
                imagen: imagen
            };
            return [...prevProductos, nuevoProducto];
        });
    };


    const eliminarProductoSeleccionado = (id) => {
        setProductoSeleccionado((prevProductos) =>
            prevProductos.filter((producto) => producto.id !== id)
        );
    };



    return (

        <contexto.Provider value={{
            productos,
            productosSeleccionados,
            productoSeleccionado,
            eliminarProductoSeleccionado


        }}>


            {children}


        </contexto.Provider>
    )







}


export default ContextoProvider;