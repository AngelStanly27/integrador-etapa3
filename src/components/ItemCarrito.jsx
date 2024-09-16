import React, { useContext } from 'react'
import CarritoContext from '../context/CarritoContext'
import './Tabla.scss'


const ItemCarrito = ({producto}) => {

    const {eliminarCarritoContext} = useContext(CarritoContext)

    const handleEliminar =(id) =>{
        console.log('eliminano', id )
        eliminarCarritoContext(id)
    }
  return (
    <tr>
            <td><img src={producto.foto} alt={producto.nombre}
            width="51px"/></td>

            <td>{producto.nombre}</td>

            <td>{producto.cantidad}</td>

            <td>{producto.precio}</td>

            <td id="elim-comprar"> 
                <button className="para-button" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
               <button className="para-button">Comprar</button>
            </td>
    </tr>
  )
}

export default ItemCarrito