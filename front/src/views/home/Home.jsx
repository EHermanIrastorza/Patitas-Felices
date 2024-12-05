import { createAction } from "@reduxjs/toolkit"
import { Navbar } from "../../components/Navbar/Navbar"
import style from "./Home.module.css"






export const Home = () => {

    return( 

        <div>
            
            <div>
        <h1 className={style.encabezadoTitulo}> Bienvenidos a patitas felices </h1>
            </div>

<hr />

        <div>
        <section className={style.conteiner}>
        <div>

             <h2 className={style.Titles}>Quienes somos!</h2>

            </div>
           
               <hr className={style.hrclass}/>
         
            <div className={style.divconteiner} >
                <div>

                    <article>

                    <p className={style.p}>¡Bienvenidos a Patitas Felices!

Somos una peluquería canina dedicada a ofrecer el mejor cuidado y bienestar para tu mascota. En Patitas Felices, sabemos que tu perro es parte de la familia, por eso nos enfocamos en brindar un servicio personalizado, con amor y dedicación en cada corte y baño.

Nuestro equipo está formado por profesionales apasionados por los animales, con amplia experiencia en el cuidado estético y la salud de los perros. Utilizamos productos de la más alta calidad, seguros y amigables con el medio ambiente, para asegurar que tu amigo peludo siempre esté cómodo y saludable.

Ya sea que necesite un baño refrescante, un corte de pelo estilizado o un tratamiento especial, en Patitas Felices nos encargamos de que cada visita sea una experiencia relajante y placentera, para que tu mascota salga con una sonrisa y una cola feliz.

¡Tu perro en las mejores manos!.</p>
                    
                    </article>


                
                </div>

                <div>

                    <img src="/imagenes/Peluqueria_1 (2).jpg" className={style.imagen}></img>
               
                </div>

            </div>

        </section>

        </div>

        <hr />

         <div>
            <section className={style.conteiner}>
        <div>
            
        <h2 className={style.Titles}> Conoce nuestro equipo!</h2>
        
        </div>
        <hr className={style.hrclass}/>
       
        <div className={style.divconteiner2}>
            <div>

            </div>

            <div>
                
       <article>
              <h3 className={style.p}> Lorena Salzar </h3>
            <p className={style.p}>En Patitas Felices, contamos con un equipo de profesionales peluqueros caninos altamente capacitados y comprometidos con el cuidado de tu mascota. Nuestros estilistas no solo son expertos en cortes y estilos, sino que también tienen una gran pasión por el bienestar animal. Cada miembro de nuestro equipo ha recibido formación especializada en técnicas de grooming, higiene canina y manejo de perros de todas las razas y tamaños.</p>
           
       </article>
            </div>
           
            <div>
               <img src="/imagenes/Peluqueria_1 (3).jpg"  className={style.imagen}></img>
            </div>
        </div>

       
        </section>

   </div>

    </div>
)
}
