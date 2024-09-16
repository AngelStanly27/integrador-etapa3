import { useContext } from "react"
import CarritoContext from "../context/CarritoContext"


const ProductoLink  = ( {producto} ) => {

  const { aggCarritoContext } = useContext(CarritoContext)

  const handleAggSlipt = (id) => {
    console.log(producto.id)
    // aggCarritoContext(producto)
  }

  
return(
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
)}

export default ProductoLink 