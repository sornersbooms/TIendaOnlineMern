import { useContext } from "react"
import contexto from "../contexto/contexto"
import styles from "./TarjetaProducto.module.css"
import productos from "../javascript/productos"


function TarjetaProducto({ product }) {






    const { productosSeleccionados } = useContext(contexto)

    return (
        <>

            <div className={styles.card}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.card_img}
                />
                <div className={styles.card_content}>
                    <h3 className={styles.card_title}>{product.name}</h3>
                    <p className={styles.card_description}>{product.description}</p>
                    <p className={styles.card_price}>${Number(product.price).toFixed(2)}</p>
                    <button className={styles.card_button} onClick={() => {productosSeleccionados(product.name, product.description, product.price, product.image)} }>Agregar al carrito  </button>

                </div>
            </div>
        </>
    )
}

export default TarjetaProducto;