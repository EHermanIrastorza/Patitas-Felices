import { useEffect, useState } from "react"
import axios from "axios";
import { Appointment } from "../../components/appointment/Appointment";
import AppointmentForm from "../../components/AppointmentForm/AppoitmentForm";
import { useSelector } from "react-redux";
import styles from "./Appointments.module.css" 

export const Appointments= () => {
    const user = useSelector((state)=> state.user.user)
    console.log(user);
    const getAllAppointmentsUrl = `http://localhost:3000/turns/byuser/${user.id}`;
    const [appointments,setAppointments] = useState([]);
    
    useEffect(()=>{
        axios.get(getAllAppointmentsUrl)
        .then((response)=>response.data)
        .then((allAppointmentsDB) => setAppointments(allAppointmentsDB))
        .catch((error)=>console.log(error))
    }, []);

    return(
        
        <div>
            <div>

            <h1 className={styles.encabezado} >Mis reservas🐩</h1>

            </div>
        <div>  <AppointmentForm/> </div>

            {
             appointments.map(appointment => (
                <Appointment
                 key={appointment.id}
                 id={appointment.id}
                 date={appointment.date}
                 time={appointment.time}
                 status={appointment.status}
                 description={appointment.description}/>
             ))
            }
        </div>
    )
}