import { useContext } from "react";
import ProductosContext from './../context/ProductosContext';

import Card from "../components/Card"
import useTitulo from "../hooks/useTitulo"

const Inicio = () => {

    const {productos} = useContext(ProductosContext)
    

  useTitulo('Inicio')

  return (
    <>
    <section className="section-cards">
        <header className="section-cards__header">
          <h1>Somos tu tienda de aire acondicionado</h1>
          <p className="yami">No sólo se fíe de nuestras palabras</p>
        </header>
        
        <div className="portada">
          <img className="portada__foto" src="/public/img/split-dos.webp" alt="portada"/>
        </div>

     
        <div className="cards-container" id="contenedor-cards">
        {
        productos && productos.map((producto) =>(
        <Card key={producto.id} producto={producto}/>
        // <Split key={producto.id} producto={producto}/>
        ))
        }
        </div>

        

      </section>
    </>
  )
}

export default Inicio