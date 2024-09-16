import { useContext } from 'react'

import './Card.scss'
import { NavLink } from 'react-router-dom'
import CarritoContext from './../context/CarritoContext';

const Card = ({producto}) => {

  const { aggCarritoContext } = useContext(CarritoContext)


  const handleAgregar = (producto) => {
    // console.log(producto.id)
    aggCarritoContext(producto)
  }
  
  return (
    // <div className="cards-container" id="contenedor-cards"></div>
    <div className="card">
        <article className="card__article">
            <NavLink to={producto.url} >
            <div className="card__image-container">
            <img src={producto.foto} alt={producto.nombre} className="card__image" />
            </div></NavLink>
            <div className="card__content">
            <h2 className="card__heading">{producto.nombre}</h2>
            <div className="card__description">
                <p id="txtDescripcion">{producto.descripcion}</p>
                <div id="prec-button">
                    <p id="precioTxt">{producto.precio} $</p>
                      
                    <button onClick={() => handleAgregar(producto)}  className="para-button">Agregar al Carrito</button>
                </div>
            </div>
            </div>
        </article>
    </div> 
  )  
  // return <pasarId key={producto.id} producto={producto} />;
}
export default Card 