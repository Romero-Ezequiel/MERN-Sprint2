import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/flecha.png';
import '../estilos/estilo.css';
class Main extends React.Component{
    render() {
        return(
            <div className="cuerpo">
                <p>
                Encuentra tu viaje perfecto, diseñado por expertos que conocen y aman sus ciudades.
                </p>
                <h2>
                Comience a navegar
                </h2>
                <Link to={'./ciudades'}>
                <img src={logo} alt='Imagen Flecha' className="App-logo" />
                </Link>
            </div>
        );

    }
}

export default Main;