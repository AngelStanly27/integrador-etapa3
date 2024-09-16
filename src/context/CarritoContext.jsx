import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const CarritoContext = createContext()

const CarritoProvider = ({children}) =>{

        const [aggAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

        function existeElProducto(producto){
            
            const arrayProductoExiste = carrito.filter(prod => prod.id  === producto.id)
            return arrayProductoExiste.length
        }

        function obtenerProductos(producto){
            return carrito.find(prod => prod.id === producto.id)
        }
    const aggCarritoContext = (producto) =>{
        
        if (!existeElProducto(producto)) {
            producto.cantidad = 1
            aggAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductos(producto)
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }

    const eliminarCarritoContext = (id) => {

        // console.log(id)
        eliminarDelCarrito (id)

    }
    
    const vaciarCarrito = () =>{
        limpiarCarrito()
    }
    
    
    const guardarCarrito = async( ) =>{
    
    console.log(carrito)

    }
    
    
    
    
    
    const data ={
        carrito,
        aggCarritoContext,
        eliminarCarritoContext,
        guardarCarrito,
        vaciarCarrito 
    }
    return<CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export {CarritoProvider}
export default CarritoContext