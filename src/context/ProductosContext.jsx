import { createContext, useEffect, useState } from "react";
import { helperPeticioneshttp } from './../helpers/helperPeticioneshttp';


const ProductosContext = createContext()


const ProductosProvider = ( { children} ) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    
    const [productos, setProductos] = useState(null)

    const [productoAEditar, setProductoAEditar] = useState(null)
    
    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {

        try {

            const prods = await helperPeticioneshttp(url, null)

            setProductos(prods)
            
        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const crearProductoContext = async (nuevoProducto) => {

        try {
            // console.log(nuevoProducto)

            const options = {
                method: 'POST',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(nuevoProducto)
            }

            const newProducto = await helperPeticioneshttp(url, options)

            // console.log(newProducto     este es el qe se uas para hacer el array)

            setProductos([...productos, newProducto])
            
        } catch (error) {
            console.error('[crearProductoContext]', error)
        }

    }

    const actualizarProductoContext = async (productoEditado) => {
        // console.log(productoEditado)
        try {

            const options = {
                method: 'PUT',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(productoEditado)
            }

            const urlEdicion = url + productoEditado.id 

            const editedProduct = await helperPeticioneshttp(urlEdicion, options)

            const nuevoEstadoProductos = productos.map( 
                producto => producto.id === editedProduct.id ? editedProduct : producto
            )
            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[actualizarProductoContext]', error)
        }

    }

    const productoAEliminar = async (id) => {
        const urlEliminar = url + id;
        try {
    
          const options = {
            method: "DELETE",
          };
    
          const res = await helperPeticioneshttp(urlEliminar, options);
    
          if (!res.ok) {
            throw new Error(`no se borra el producto ${res.status}`);
          }
          const dataElimino = await res.json();
          
          
          const data = {
            id: id,
            producto: dataElimino
          }
    
          const nuevoEstadoProducto = productos.filter(
            (prod) => prod.id !== id
          );
          setProductos(nuevoEstadoProducto);
        } catch (error) {}
      }

    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        productoAEditar,
        setProductoAEditar,
        productoAEliminar
    }

    return <ProductosContext.Provider value={data}>{ children }</ProductosContext.Provider>
}
// ! 3. Exportamos el contexto y provider

export { ProductosProvider }
export default ProductosContext