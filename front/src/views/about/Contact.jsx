import styles from "./Contact.module.css"

export const Contact = () => {

    return (
        <div>
            <div>
               <h1 className={styles.encabezado}>Contactanos! 🐶</h1>
            </div>    

               <div className={styles.contacto}>
                <section>
                    <article >
                        <div className={styles.conteiner}>

                            <h2 className={styles.Titles1}> Nuestros datos de contacto! </h2>

                        </div>

                        <div>

                        <p>
                        ¡Gracias por visitar nuestra página! Estamos aquí para ayudarte a cuidar y mimar a tu compañero peludo. Si tienes alguna pregunta sobre nuestros servicios, productos o simplemente necesitas asesoría sobre el bienestar de tu mascota, no dudes en contactarnos.
                        Nuestro equipo de expertos en mascotas está listo para brindarte la mejor atención y asegurar que tu canino reciba lo mejor. ¡Esperamos poder ayudarte pronto!
                        </p>

                        </div>
                    </article>
                </section>
               </div>
        </div>

    )
}