
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css"
import { useDispatch, useSelector } from "react-redux";
import{unSetUser} from "../../reducers/users/userSlice"

export const Navbar = ()=>{
    const user = useSelector((state)=> state.user)
    const dispatch = useDispatch()
    const login = user.loggin
    const navigate = useNavigate()
    const handlerLogout = ()=>{
        dispatch(unSetUser())
        navigate("/login")
    }

    return (
        <div className={styles.contenedorNavbar}>
            <div className={styles.centrarImagen}>
            <div className={styles.titulo}>
            <h1>Patitas Felices</h1>
            </div>
            <div >
             <img src="/imagenes/pelucaninalogo1.png" alt="Logo" className={styles.logo} />
            </div>
            </div>
            <div className={styles.links}>
            <Link to="/" className={styles.botonLink}>Home</Link>
            {!login?<Link to="login" className={styles.botonLink}>Ingresar</Link>: null}
            {!login?<Link to="register" className={styles.botonLink}>Regristrarse</Link>:null}
            <Link to="Appointment" className={styles.botonLink}>Turnos</Link>
            <Link to="Contact" className={styles.botonLink}>Contacto</Link>
             {login?<button onClick={handlerLogout}  className={styles.botonLink}>Cerrar sesión</button>:null}

            </div>
        </div> 
    )
 

}