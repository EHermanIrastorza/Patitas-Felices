import {Field, Form, Formik,ErrorMessage} from "formik";
import axios from "axios";
import appointmentValidations from "../../validations/AppointmentValidations";
import { useSelector } from "react-redux";
import styles from "./Appointments.module.css";

export default function AppointmentForm (){
    const user = useSelector((state) => state.user.user)
    
    return(

        <Formik
        initialValues={{date:"",time:"",description:"",userId: user.id}}
        validate={appointmentValidations}
        onSubmit={ async (values, { setSubmitting, resetForm }) => {
            try {
                await axios.post("http://localhost:3000/turns/schedule", values)
                console.log(values)
                alert(`Appoitnment agendado`);
                setSubmitting(false); 
                resetForm(); 
                
                } catch (error) {
                    alert("los turnos deben ser sacados en una fecha valida")
                    console.log(error) 

                }
                
            }}
        >
            {({isSubmitting})=>(
 <div>
 
 <hr />
       
        <div className={styles.formularioContainer}>

          <Form className={styles.formulario}>
             
             <label htmlFor="date" className={styles.label}>Fecha:</label>
                 <Field
                 id="date"
                 type="date"
                 name="date"
                 placeholder="yyyy/mm/dd"
                 className={styles.input}
                 min={new Date().toISOString().split("T")[0]}
                 required
                 />
                 <br />
                 <ErrorMessage name= "date" component="div" style={{ color: "violet" }} />
                 <br />

                 <label htmlFor="time" className={styles.label}>Horario:</label>
                 <Field
                 id="time"
                 type="text"
                 name="time"
                 placeholder="14:30hs"
                 className={styles.input}
                 required
                 />
                 <br />
                 <ErrorMessage name= "time" component="div" style={{ color: "violet" }} />
                 <br />

                 <label htmlFor="description" className={styles.label}>Descripción:</label>
                 <Field
                 id="description"
                 type="text"
                 name="description"
                 placeholder="Corte y Baño"
                 className={styles.input}
                 required
                 />

                 <br />
                 <ErrorMessage name= "description" component="div" style={{ color: "violet" }} />

                 <br />

                 <button type="submit" className={styles.button} disabled={isSubmitting}>Enviar</button>

          </Form>

            </div>
</div>
            )}

        </Formik>
    )
    
    
}