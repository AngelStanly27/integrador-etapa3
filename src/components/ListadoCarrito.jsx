import React, { useContext } from 'react'
import ItemCarrito from './ItemCarrito'
import CarritoContext from '../context/CarritoContext'
import './Tabla.scss'


const ListadoCarrito = () => {

  const{carrito, vaciarCarrito, guardarCarrito} =useContext(CarritoContext)

  const handleComprar = () =>{
    console.log('Comprando en el carrito')
    guardarCarrito()

  }

  const handleLimpiarCarrito = () =>{
    vaciarCarrito()
    console.log('vaciando carrito')
  }



  return (
    <>
    <table className="tabla-alta">
        <thead>
                <tr>
                    <th className="nav-bar__nav-link">Foto</th>
                    <th className="nav-bar__nav-link">Nombre</th>
                    <th className="nav-bar__nav-link">Cantidad</th>
                    <th className="nav-bar__nav-link">Precio</th>
                    <th className="nav-bar__nav-link">Acciones</th>
                </tr>
        </thead>

        <tbody>
            {   carrito.length <= 0 ? (
                <tr>
                    <td>No hay producto</td> 
                </tr>
            ) : (
                carrito.map((producto, idx) =>(
                    <ItemCarrito key={idx} producto={producto}/>
                ))
                )

            }
        </tbody>    
    </table>
        <hr />  

    {!carrito.length <= 0 && (

        <>
             <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
             <button onClick={handleComprar}>Comrpar</button>

        </>
    )}
    

    </>
  )
}

export default ListadoCarrito