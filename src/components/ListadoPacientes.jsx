import Paciente from "./Paciente"
//import { useEffect } from "react"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    /*useEffect(() =>{
        if(pacientes.length > 0){
            console.log('Nuevo Paciente');
        }
      },[pacientes])*/

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen ">

            {pacientes && pacientes.length ?(
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    
                    { pacientes.map(paciente=>(
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ):(
                <>
                <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza a agregar pacientes. {''}
                        <span className="text-indigo-600 font-bold">Aquí se mostrarán</span>
                    </p>
                </>
            )}

            
            

        </div>
    )
}

export default ListadoPacientes
