import imagenlogo from "../img/logo.png"
import styles from "./BarraNavegacion.module.css"
import { Outlet, Link } from "react-router-dom";



function BarraNavegacion() {

    return (
        <>
            <div className={styles.container}>
               
                <nav>
                <img src={imagenlogo} alt="logostore" className={styles.imagenlogo} />

                    <ul>
                        <li className={styles.column}>
                            <Link to="/" className={styles.enlace}>Casa</Link>
                        </li>
                        <li className={styles.column}>
                            <Link to="./blogs" className={styles.enlace}>Blogs</Link>
                        </li>
                        
                        <li className={styles.column}>
                            <Link to="/carrito" className={styles.enlace}>Carrito</Link>
                        </li>
                        <li className={styles.column}>
                            <Link to="/registro" className={styles.enlace}>Registro</Link>
                        </li>
                        <li className={styles.column}>
                            <Link to="/login" className={styles.enlace}>Login</Link>
                        </li>
                    </ul>
                </nav>

            </div>

            <Outlet />


        </>
    )






}


export default BarraNavegacion;