import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../admin/Dashboard.css"
import TablaReservas from "../../components/TablaReservas";

function ClienteDashboard({onLogout}){
    const [seccion, setSeccion] = useState("Mis reservas")
    const opciones = ["Mis reservas", "Mi perfil"]

    return(
        <div className="hp-dashboard">
            <Sidebar
            titulo="Espacio del cliente"
            opciones={opciones}
            seccion={seccion}
            cambiarSeccion={setSeccion}
            cerrarSesion={onLogout}
            />
            <main className="hp-main">
                <header className="hp-header">
                    <div> 
                        <p className="hp-eyebrown">PANEL DEL CLIENTE </p>
                        <h1>{seccion}</h1>
                        <p>Bieneido al hotel paraiso</p>
                    </div>
                </header>
                <section className="hp-panel">
                    <div className="hp-panel-header">
                        <h2>{seccion}</h2>
                        <p>
                            {seccion === "Mis reservas"
                            ? "Consulta aqui tus reservas"
                            : "Aqui podras consultar tu informacion personal"
                            }
                        </p>
                    </div>
                    {seccion == "Mis reservas" && <TablaReservas/>}
                </section>
            </main>
        </div>
    )
}
export default ClienteDashboard