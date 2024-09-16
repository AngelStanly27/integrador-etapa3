import { useState } from "react"



export const useLocalStorage = (clave, valorInicial= []) =>{

    const getValorAlmacenado =() =>{

        try {
            const ValorAlmacenado = window.localStorage.getItem(clave)
            return ValorAlmacenado ? JSON.parse(ValorAlmacenado) : valorInicial
            
        } catch (error) {
            console.error(`Error al obtener ${clave} del Local Storage ${error} `)
            return valorInicial

        }
    }
    
    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())

    const guardarValor = (valorNuevo) => {

        try {
            const nuevoValorAlmacernado = [...valorAlmacenado, valorNuevo]
            setValorAlmacenado(nuevoValorAlmacernado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacernado))
        } catch (error) {
            console.error(`Èrror al Guardar ${clave} del Local Storage: ${error}`)
        }


    }

    const eliminarValor = (id) =>
        {try {
        
            const nuevoValorAlmacernado = [...valorAlmacenado]
    
            const indice = nuevoValorAlmacernado.findIndex(item => item.id === id)
    
            nuevoValorAlmacernado.splice(indice, 1)
                console.log(nuevoValorAlmacernado)
            setValorAlmacenado(nuevoValorAlmacernado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacernado))

         } catch (error) {
            console.error(`Error al Eliminar ${clave} del Local Storage con ${id} del producto ${error}`)
         }
    }
    const limpiarValor =() =>{
        window.localStorage.clear
        window.localStorage.setItem(clave, JSON.stringify(valorInicial))
        setValorAlmacenado(valorInicial)
    }

    return[guardarValor, eliminarValor, limpiarValor, valorAlmacenado]
}