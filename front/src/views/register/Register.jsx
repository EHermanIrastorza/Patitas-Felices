import {Field, Form, Formik,ErrorMessage} from "formik";
import validateUser from "../../validations/registerValidations";
import axios from "axios";
import styles from "./Register.module.css"
import { useSelector } from "react-redux";

export default function Register(){
    const user = useSelector((state)=> state.user)
    const login = user.loggin

    return (

        <Formik
        initialValues={{ name:"" , email:"", birthdate:"",nDni:"",password:"",username:""}}

        validate={validateUser}
        
        onSubmit={ async (values, { setSubmitting, resetForm }) => {
            try {
            await axios.post("http://localhost:3000/user/register", values)
            alert(`username ${values.username} creado correctamente`);
            setSubmitting(false); 
            resetForm(); 
               
              
            } catch (error) {
                console.log(error) 
            }
            
        }}

        >
            {({isSubmitting})=>(
                <div>
                <hr />

     <div className={styles.formularioContainer}>
         
            <Form className={styles.formulario}>
        <label htmlFor="name" className={styles.label} >Nombre:</label>
        
        <Field
         id="name"
         type="text"
         name="name"
         placeholder="Roberto carlos"
         className={styles.input}
         required
         />

        <br />
        <ErrorMessage name= "name" component="div" style={{ color: "violet" }} />
        <br />

        <label htmlFor="email" className={styles.label}>Email:</label>
        <Field
         id="email"
         type="text"
         name="email"
         placeholder="Robert@gmail.com"
         className={styles.input}
         required
         />
        <br />
        <ErrorMessage name= "email" component="div" style={{ color: "violet" }} />
        <br />
      {console.log(ErrorMessage)}

        <label htmlFor="birthdate" className={styles.label}>Cumpleaños:</label>
        <Field
         id="birthdate"
         type="date"
         name="birthdate"
         placeholder="yyyy/dd/mm"
         className={styles.input}
         required
         />
        <br />
        <ErrorMessage name= "birthdate" component="div" style={{ color: "violet" }} />
        <br />

        <label htmlFor="nDni" className={styles.label}>Nº Dni:</label>
        <Field
         id="nDni"
         type="number"
         name="nDni"
         placeholder="30124575"
         className={styles.input}
         required
         />
        <br />
        <ErrorMessage name= "nDni" component="div" style={{ color: "violet" }} />
        <br />

        <label htmlFor="password" className={styles.label}>Contraseña:</label>
        <Field
         id="password"
         type="password"
         name="password"
         placeholder="*******"
         className={styles.input}
         required
         />
        <br />
        <ErrorMessage name= "password" component="div" style={{ color: "violet" }} />
        <br />

        <label htmlFor="username" className={styles.label}>Usuario:</label>
        <Field
         id="username"
         type="text"
         name="username"
         placeholder="robertito321"
         className={styles.input}
         required
         />
        <br />
        <ErrorMessage name= "username" component="div" style={{ color: "violet" }} />
        <br />

       <button type="submit" className={styles.button} disabled={isSubmitting || login}>Enviar</button>
        
        
        </Form>
            </div>
            </div>
            )}

</Formik>
)
}