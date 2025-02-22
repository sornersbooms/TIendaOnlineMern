import { useContext } from "react"
import contexto from "../contexto/contexto"
import styles from "./ListaProductos.module.css"
import TarjetaProducto from "./TarjetaProducto"



function ListaProductos() {
    const { productos } = useContext(contexto);


    return (
        <>

            
                
            




           



            

            <div className={styles.product_grid}>

                {productos.map((product) => (
                    <TarjetaProducto key={product.id} product={product}/>
                ))}

            </div>
        </>
    )
}


export default ListaProductos