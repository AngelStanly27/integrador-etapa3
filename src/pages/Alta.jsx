import useTitulo from "../hooks/useTitulo"
import Tabla from './../components/Tabla';
import FormulAlta from "../components/FormulAlta";

import './Contacto.scss'



const Alta = () => {
  
    useTitulo('Alta')

  return (
   <><h1>Formulario de Alta de Productos</h1>
     {/* <h2>Agregar Producto </h2> */}

        <FormulAlta/>
        <hr />
        <Tabla/>


   </>

   
  )
}

export default Alta