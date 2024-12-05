import styles from "./Appointment.module.css"
import { Formik, Form } from "formik";
import axios from "axios"

export const Appointment=({id, date, time, status, description})=>{
 
    const handleCancelReservation = async (values, { setSubmitting }) => {
        try {
          await axios.put(`http://localhost:3000/turns/cancel/${id}`);
          alert("Cancel confirmed");
        } catch (error) {
          console.log(error);
          alert("Error al cancelar la reserva.");
        } finally {
          setSubmitting(false);
        }
      };


    return(
        <div>
        <div className={styles.divAppointment} >
            <div className={styles.conteiner} >

            <h3 className={styles.appointmentTitle}>Appointment</h3>
            </div>
     
            

              <div className={styles.contenedorEstadoCita} >

                <span className={styles.elementoCita}>{date}</span>
                <span className={styles.elementoCita}>{time}</span>
                <span className={styles.elementoCita}>{description}</span>
                { status === "active" ? (
                    <span className={styles.estadoActivo} > Active </span>
                ): (
                    <span className={styles.estadoCancelado}> cancelled </span>
                )
            }
        <Formik initialValues={{}} onSubmit={handleCancelReservation}>
            {({ isSubmitting }) => (
              <Form>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.elementoCita}>

                  {isSubmitting ? "Cancelando..." : "Cancelar Turno"}
                </button>
              </Form>
            )}
          </Formik>


        </div>
      
       </div>

    </div>

    )
}