import { useEffect } from "react"

const useTitulo = ( textoTitulo = 'Sin Titulo') =>{
    
    useEffect(() => {
      
        document.title = `El Angel - ${textoTitulo}`
    
    }, [])
    
}
export default useTitulo