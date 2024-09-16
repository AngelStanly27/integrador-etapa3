import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'
import Formulario from './../components/Formulario';

const Contacto = () => {

  useTitulo('Contacto')

  return (
    <><div className="contacto">
      <h1>Contacto</h1>

      <nav className="contacto__num">
        <p>Tienda</p>
        <p>Consultas Comerciales</p>
        <h3 className="contacto__phone">900 900 900 (Ext.1)</h3>
      </nav>
      <nav className="contacto__num">
        <p>Dpt. Técnico</p>
        <p>Consultas Técnicas</p>
        <h3 className="contacto__phone">900 900 900 (Ext.2)</h3>
      </nav>
      <nav className="contacto__num">
        <p>Dpt. Reclamaciones</p>
        <p>Garantía y devolución</p>
        <h3 className="contacto__phone">900 900 900 (Ext.3)</h3>
      </nav>
      <nav className="contacto__num">
        <p>Dpt. Administración</p>
        <p>Consultas Administrativas</p>
        <h3 className="contacto__phone">900 900 900 (Ext.4)</h3>
      </nav>

    </div><h2 id="h2-cont">¡Contacte con nosotros!</h2>

    <Formulario />

      <div className="horario">
        <div className="horario__dias">
          <div className="semana">
            <h3>Horario Laboral</h3>
            <ul className="semana__separacion">
              <p>Lunes</p>
              <p>De 08:00 a 18:00</p>
            </ul>
            <ul className="semana__separacion">
              <p>Martes</p>
              <p>De 08:00 a 18:00</p>
            </ul><ul className="semana__separacion">
              <p>Miércoless</p>
              <p>De 08:00 a 18:00</p>
            </ul><ul className="semana__separacion">
              <p>Jueves</p>
              <p>De 08:00 a 18:00</p>
            </ul><ul className="semana__separacion">
              <p>Viernes</p>
              <p>De 08:00 a 18:00</p>
            </ul><ul className="semana__separacion">
              <p>Sábado</p>
              <p>De 08:00 a 12:00</p>
            </ul><ul className="semana__separacion">
              <p>Domingo</p>
              <p>Cerrado</p>
            </ul>
          </div>
        </div>

        <div className="horario__tiendas">
          <div className="lugar">
            <h4>Buenos Aires</h4>
            <p>Calle: Lorem ipsum dolor sit amet  dolor sit amet consectetur adipisicing consectetur adipisicing elit. Fugit reprehenderit a delectus sit nisi.</p>
            <p className="contacto__phone">Teléfono: 900 900 900</p>
          </div>
          <div className="lugar">
            <h4>la Plata</h4>
            <p>Calle: Lorem ipsum dolor sit amet  dolor sit amet consectetur adipisicing consectetur adipisicing elit. Fugit reprehenderit a delectus sit nisi.</p>
            <p className="contacto__phone">Teléfono: 900 900 900</p>
          </div>
          <div className="lugar">
            <h4>Quilmes</h4>
            <p>Calle: Lorem ipsum dolor sit amet  dolor sit amet consectetur adipisicing consectetur adipisicing elit. Fugit reprehenderit a delectus sit nisi.</p>
            <p className="contacto__phone">Teléfono: 900 900 900</p>
          </div>

        </div>
      </div></>
  )
}

export default Contacto