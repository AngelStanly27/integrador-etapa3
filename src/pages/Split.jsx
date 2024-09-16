import { useContext } from 'react'
import useTitulo from '../hooks/useTitulo'

import './FormatoPag.scss'
import CarritoContext from '../context/CarritoContext'
import ProductosContext from '../context/ProductosContext'
import ProductoLink from '../components/ProductoLink '
import { useLocation } from 'react-router'

const Split = () => {
  useTitulo('Split')


  const {productos} = useContext(ProductosContext)
  const { aggCarritoContext } = useContext(CarritoContext)

  const idBuscado = 1
 
  const productoEncontrado = productos && productos.filter(producto => producto.id === idBuscado);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get(productos);

  

  


  const handleAggSlipt =() =>{
    // console.log('eliminano', idProducto)


    aggCarritoContext(productoEncontrado)

    console.log('llego a Add?', id)
    }
  

  return (
    <>
    <h1>Aire Acondicionado Split</h1>
    <div className="three"  >
        <ul className="three__caption" >
         
            <img src="/src/components/img/split-uno.webp"   className="three__photo" alt="Aire Acondicionado Split uno" />
        </ul>
        <ul className="three__caption">
            <img src="/src/components/img/split-tres.webp" className="three__photo" alt="Aire Acondicionado Split tres" />
         </ul>
        <ul className="three__caption">
             <img src="/src/components/img/split-cuatro.webp" className="three__photo" alt="Aire Acondicionado Split cuatro" />
         </ul>
  </div>
  <div className="detalles">
     <div className="detalles__producto">
      <h3>Descripción</h3>
      <p className="devl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptates consectetur consequuntur quo cumque, esse corrupti! Praesentium excepturi earum totam voluptatibus dolorum quisquam voluptas aspernatur quaerat rem, nulla, tenetur nesciunt.
        Accusantium magnam, quas dolores vel tempora.
      </p>
     </div>
         <div className="detalles__garantias">
         <h3>Garantía y devolución</h3>
         <p className="devl">Garantía de devolución de 30 días</p>
         <p>Envío: 2-3 días laborales</p>
         <p> Producto nuevo, comprado directamente al fabricante.</p>
         <p>¡Compra con seguridad!, 14 días para devolver el producto. </p>
        </div>
     </div>
    <div className="modelo">
         <h2 className="modelo__caracter">Modelo: Aire Acondicionado Split XXXXXX XXXXXX XXXXXXX</h2>
         <h2 className="modelo__caracter">Marca:  Aire Acondicionado     Split XXXXXX XXXXXX XXXXXXX</h2>
    </div>

    <div className="end">
  <ul className="end__buy-list">
     <button  onClick={() => handleAggSlipt(productoEncontrado)} className="end__bottom">
          <span></span>  
          <span></span>  
          <span></span>  
          <span></span>   
      Añadir al Carrito
     </button>
   </ul>
   <ul className="end__buy-list">
     <button href="#" className="end__bottom">
          <span></span>  
          <span></span>  
          <span></span>  
          <span></span>  
     comprar
     </button>
   </ul>
   </div>

  </>
  )
}
export default Split
