import HabitacionCard from "./HabitacionCard";
import './Habitaciones.css'
import estandar from "../assets/habitacion-estandar.jpg"
import premium from "../assets/habitacion-premium.jpg"
import suite from "../assets/habitacion-suite.jpg"

const habitaciones = [
    {
        id: 1,
        nombre: "Habitación Estándar",
        descripcion: "Habitación cómoda con vista al mar",
        precio: 15000,
        imagen: estandar
    },
    {
        id: 2,
        nombre: "Habitación Premium",
        descripcion: "Habitación de lujo con servicios exclusivos",
        precio: 25000,
        imagen: premium
    },
    {
        id: 3,
        nombre: "Habitación Suite",
        descripcion: "Amplia suite con máxima comodidad",
        precio: 40000,
        imagen: suite
    }
]

function Habitaciones(){
    return(
        <section className="py-5 bg-ligth" id="habitaciones">
            <div className="container">
                <h2 className="text-center fw-bold mb-3">Nuestras habitaciones</h2>
                <p className="text-center text-secondary mb-5">
                    Descubre nuestras habitaciones diseñadas para tu comodidad y descanso
                </p>
                <div className="row">
                    {habitaciones.map((habitacion) => (
                        <HabitacionCard 
                            key={habitacion.id} 
                            habitacion={habitacion} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Habitaciones;