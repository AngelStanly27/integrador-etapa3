import { useRoutes } from 'react-router-dom';
import Contacto from '../pages/Contacto';
import Inicio from '../pages/Inicio';
import Alta from '../pages/Alta';
import Nosotros from '../pages/Nosotros';
import NoEncontrado from '../pages/NoEncontrado';
import Carrito from '../pages/Carrito';
import Split from '../pages/Split';
import Duo from '../pages/Duo';
import Triple from '../pages/Triple';
import Techo from '../pages/Techo';
import Ind from '../pages/Ind';
import Central from '../pages/Central';
import Ventana from '../pages/Ventana';
import Cortina from '../pages/Cortina';
import Portatil from '../pages/Portatil';
import Enfriador from '../pages/Enfriador';
import Deshumificador from '../pages/Deshumificador';
import Torre from '../pages/Torre';

const Rutas = () => {
    const routes = useRoutes(
        [
            {path: '/',
             element: <Inicio />},
             
             {path: '/carrito',
              element: <Carrito />},

            {path: '/alta',
             element: <Alta />},

            {path: '/nosotros',
             element: <Nosotros />},
             
            {path: '/contacto',
             element: <Contacto />},
            
             {path: '/split',
             element: <Split />},

             {path: '/duo',
             element: <Duo />},

            {path: '/triple',
             element: <Triple />},
            
            {path: '/techo',
             element: <Techo />},

            {path: '/ind',
             element: <Ind />},

            {path: '/central',
             element: <Central />},

            {path: '/ventana',
             element: <Ventana />},
            
             {path: '/cortina',
             element: <Cortina />},

            {path: '/portatil',
             element: <Portatil />},

            {path: '/enfriador',
             element: <Enfriador />},

            {path: '/deshumificador',
             element: <Deshumificador />},

            {path: '/torre',
             element: <Torre />},

            {path: '*',
             element: <NoEncontrado />},
        ]
    )
    return routes
}
export default Rutas