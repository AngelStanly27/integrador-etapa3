import React, { useContext } from 'react';
import CarritoContext from '../context/CarritoContext';
import { useNavigate } from 'react-router';



const SearchBar = () => {
  let artDelCarro = 0

  const{carrito, vaciarCarrito, guardarCarrito} =useContext(CarritoContext)

  const handleComprar = () =>{
    console.log('Comprando en el carrito')
    guardarCarrito()
   } 

   const handleLimpiarCarrito = () =>{
    vaciarCarrito()
    console.log('vaciando carrito')
  }

  // const  = useRoutes()
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Carrito');
  };

    
      if(carrito.length  > 0){
        // return carrito
        artDelCarro = carrito.length;
        // document.getElementById('cardNum').textContent = carrito.length;
        
        console.log('llegue al carritotoototototo', artDelCarro  )
      }
    




  return (
    <div className="search-bar">
        <div className="search-bar__logo-container">
          <img src="/public/img/logo.png"  className="search-bar__logo input" alt="Aires Acondicionados EL Angel" />
        </div>

        <form action="" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
          <input type="search" className="search-bar__form-search " id="busqueda" />
          
          <div className="input-svg">
            <input type="submit" className="search-bar__form-submit" value="Buscar" />

          
           <svg   xmlns="http://www.w3.org/2000/svg"  className="input-icon"        viewBox="0 0 20 20"      fill="currentColor">
           <path     fillRule="evenodd"        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
           </svg>

           {/* <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="searchBtnIcon-_6vD7 input-icon" alt="common_successful" aria-label="Buscar "><path d="M486.4 102.4c212.1 0 384 171.9 384 384 0 78.4-23.5 151.3-63.8 212l147.5 132.4c21 18.9 22.8 51.3 3.9 72.3-17.4 19.4-46.4 22.4-67.2 7.9l-5.1-4-146.5-131.5c-67.5 59.1-156 94.9-252.8 94.9-212.1 0-384-171.9-384-384 0-212.1 171.9-384 384-384z m0 102.4c-155.5 0-281.6 126.1-281.6 281.6 0 155.5 126.1 281.6 281.6 281.6 155.5 0 281.6-126.1 281.6-281.6 0-155.5-126.1-281.6-281.6-281.6z"></path></svg> */}
          </div>
        
         
        </form>
          <div className="search-bar__carrito-container">
            <i className="fa-solid fa-cart-shopping">
              
            {!carrito.length <= 0 &&(
            <span id="cardNum">{artDelCarro}</span>
             )}

             <div className="buy-car">
               {/* <ul className="nav-car"> */}
                  {/* <li>Imagen</li> */}
               {/* </ul> */}

               <button onClick={handleClick} className= "btn-card">VER CARRITO</button>

               {!carrito.length <= 0 &&(
                 <>  <button onClick={handleComprar} className= "btn-card">COMPRAR</button>

                   

                  
                   <button  onClick={handleLimpiarCarrito} className= "btn-card">VACIAR CARRITO</button>
                  </>)}
                </div>
            </i>
          </div> 
        
          {/* <svg className="iconSvg-2ArbZ iconFill-65mNB" alt="" aria-label="" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" width="2.7em" height="2.7em"><path d="M373.3 916.1c32.8 0 59.4-26.6 59.5-59.4 0-32.8-26.6-59.4-59.5-59.4-32.8 0-59.4 26.6-59.4 59.4 0 32.8 26.6 59.4 59.4 59.4z m396.2 0c32.8 0 59.4-26.6 59.5-59.4 0-32.8-26.6-59.4-59.5-59.4-32.8 0-59.4 26.6-59.4 59.4 0 32.8 26.6 59.4 59.4 59.4z m-684.2-815.1l90.3 17.4c49.9 9.6 88.7 49.2 97.2 99.4l2.3 13.8 486.2 0c91.4 0 165.5 74.1 165.5 165.5 0 8.8-0.7 17.6-2.1 26.3l-28.9 179.1c-12.6 78.3-80.2 135.8-159.4 135.8l-335.9 0c-80.8 0-149.1-59.7-160-139.6l-43-314.8-0.5-2.3-8.4-49.6c-2.5-15-14.2-26.9-29.1-29.8l-90.3-17.4c-23.1-4.4-38.3-26.8-33.9-49.9 4.4-23.1 26.8-38.3 50-33.9z m676 216l-473.2 0 36.9 270.1c5.2 37.7 37.4 65.9 75.5 65.9l335.9 0c37.4 0 69.3-27.1 75.2-64.1l28.9-179c0.7-4.2 1-8.5 1-12.8 0-44.3-35.9-80.2-80.2-80.1z"></path></svg> */}
        
        
        <div className="menu-toogle">
          <label htmlFor="menu" className="menu-toogle__label">
            <span className="menu-toogle__top-bread"></span>
            <span className="menu-toogle__meat"></span>
            <span className="menu-toogle__bottom-bread"></span>
          </label>
        </div>
      </div>
  )
}

export default SearchBar