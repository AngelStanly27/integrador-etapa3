import menuItems from '../constants/menuItems'
import './Footer.scss'
import logo from './img/logo.png';


const Footer = () => {
  return (
    <footer>
    <nav className="food">
      <div className="food__logotipo">
      <img src={logo} alt="aire acondicionado el angel" className="food__logo" /> 
      </div>
     
      <div className="food__inicio">
        
        {menuItems.map( item => (
          <ul key={item.id}>
            <a href={item.ruta} className="food__link">{item.nombre}</a>
          </ul>
        ))

        }
      </div>
      
      <div className="food__avisos">
        <ul><a href="#" className="food__link">Aviso legal</a></ul>
        <ul><a href="#" className="food__link">Términos y condiciones</a></ul>
        <ul><a href="#" className="food__link">Política de privacidad</a></ul>
        <ul><a href="#" className="food__link">Política de cookies</a></ul>
      </div>

      <div className="food__nota">
      <p>  En Aire Acondicionado El Angel tenemos en cuenta la confidencialidad de los datos del Usuario. De conformidad con lo dispuesto por la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales. </p>
      </div>
      </nav>
    </footer>
  )
}

export default Footer