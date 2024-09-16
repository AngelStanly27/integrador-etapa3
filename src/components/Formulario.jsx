import { useState } from "react"



const Formulario = () => {

  const formMsj = {
    id: null,
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  }

  const [formParaMsj, setFormParaMsj] = useState(formMsj)

  const handleChange = e => {
    
    console.log(e.target.value) 
    const { type, name, checked, value } = e.target

       setFormParaMsj({
         ...formParaMsj,
         [name]: type === 'checkbox' ? checked : value
         })
     } 

 const handleSubmit = (e) => {
      e.preventDefault();
      const datosCompletos = { ...formParaMsj };
      console.log(datosCompletos);
      
  };
  


  return (
   
  <div className="form" onSubmit={handleSubmit}>
    <div className="form__group">
      <label className="form__label" htmlFor="lbl-nombre">Nombre</label>
      <input type="text" name="nombre" required="required" value={formParaMsj.nombre} onChange={handleChange} className="form__input" />

    </div>
    <div className="form__group">
      <label className="form__label">Email</label>
      <div className="form__control">
        <input type="email" name="email" required="required" value={formParaMsj.email} onChange={handleChange} className="form__input" />
      </div>
    </div>
    <div className="form__group">
      <label className="form__label">Asunto</label>
      <div className="form__control">
        <input type="text" name="asunto" required="required" value={formParaMsj.asunto} onChange={handleChange} className="form__input"/>
        </div>
    </div>
    <div className="form__group">
      <label className="form__label">Mensaje</label>
      <div className="form__control">
        <textarea name="mensaje" required="required" value={formParaMsj.mensaje} onChange={handleChange} className="form__input"></textarea>
      </div>
    </div>
    <div>
      <button type="submit" name="enviar" className="form__enviar">Enviar</button>
    </div>
  </div>
  
  )
}

export default Formulario