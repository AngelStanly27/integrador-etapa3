import { useContext } from 'react'
import ProductosContext from '../context/ProductosContext'
import './tablafila.scss'


const TablaFila = ( {producto, productoAEliminar} ) => {

  const { setProductoAEditar } = useContext(ProductosContext)

  
  const handleEditar = (producto) => {
      setProductoAEditar(producto)
  }

  const handleBorrar = (producto) => {
  console.log('Producto a elimi...', producto.id)
  productoAEliminar(producto.id)
  }


  
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>

      <td>
        <img src={producto.foto} alt={producto.nombre} className="img-row" />
      </td>
      
      <td>{producto.envio ? 'Si' : 'No' } </td>
      
      <td id="elim-comprar">
        <button className="para-button" onClick={() => handleEditar(producto)}>Editar</button>
        <button className="para-button" onClick={() => handleBorrar(producto)}>Borrar</button>
      </td>

    </tr>
  )
}

export default TablaFila

