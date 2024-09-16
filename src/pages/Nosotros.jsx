import useTitulo from "../hooks/useTitulo"
import './Nosotros.scss'

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <>
    <h1>Nuestra historia</h1>
    
     <div className="historia">
       
      <div className="historia__year">
        <p className="year-parr">Desde 1988.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit eveniet ducimus repellat dignissimos. Dolorem aperiam maxime nobis nostrum consequuntur voluptatibus provident expedita beatae ratione, fugit culpa optio quo blanditiis.
        Facilis quas facere, nostrum minima rerum vero asperiores temporibus dolorem quasi eveniet esse sint vitae sunt maiores explicabo magni labore molestiae obcaecati fuga repellat dolores cupiditate quod! At, modi consequatur?</p>
       </div>
       <div className="historia__log-nos">
        <img src="logo.png" className="logo-nos" alt="aire acondicionado logo" />
       </div>
       
     </div>
    
     <div className="portada-ds">
      <img src="/src/components/img/portada-dos.webp" className="portada-dos"  alt="portada-dos" />
    </div>
     
    <div className="para">
      <div className="para__consumidores">
        <h3>Para los consumidores</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit, aperiam ipsam nostrum, rerum quo labore iste libero voluptas nihil obcaecati dolor hic eos beatae similique animi consectetur illo sed.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam ipsum voluptate iste cumque consequatur expedita iure perferendis rem pariatur nulla, libero optio in delectus dolorum est similique, fugiat dolor. Eaque, eius pariatur! Ipsum, suscipit mollitia facere amet accusantium tenetur sunt ex tempore voluptatibus magnam. Architecto quae enim dolor. Id modi reprehenderit quidem sequi voluptatem debitis praesentium at eius ea.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat mollitia atque, vero iste explicabo vitae dolorem reprehenderit!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, veniam!</p>
      </div>
      
      <div className="para__empresas">
        <h3>Para las empresas</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus iure reprehenderit possimus incidunt? Impedit iste dolorem aliquam aliquid reiciendis cum. Veritatis accusantium exercitationem.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque officia placeat quisquam perferendis qui corrupti quaerat, quidem sunt ex at animi consectetur. Dolore, cupiditate nobis!</p>
      </div>
    </div>
    <p className="txt-food">Todo lo relacionado en aires acondicionado comercial, preofesional e industrial</p>
    </>
  )
}

export default Nosotros