
import useTitulo from '../hooks/useTitulo'

import './FormatoPag.scss'

const Split = () => {
  useTitulo('Duo')

  

  return (
    <>
    <h1>Aire Acondicionado Portátil</h1>
    {/* {productos.map((producto) => ( */}
    <div className="three"  >
        <ul className="three__caption" >
         
            <img src="/src/components/img/portatil-uno.webp"   className="three__photo" alt="Aire Acondicionado Split uno" />
        </ul>
        <ul className="three__caption">
            <img src="/src/components/img/portatil-tres.webp" className="three__photo" alt="Aire Acondicionado Split tres" />
         </ul>
        <ul className="three__caption">
             <img src="/src/components/img/portatil-dos.webp" className="three__photo" alt="Aire Acondicionado Split cuatro" />
         </ul>
  </div>
  {/* ))} */}
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
      <button  onClick={() => handleAggSlipt(producto)} className="end__bottom">
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
