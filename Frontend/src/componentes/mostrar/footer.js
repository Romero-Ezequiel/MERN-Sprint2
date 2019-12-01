import React from 'react';
import {Link} from 'react-router-dom'
import home from '../img/home.png';
import '../estilos/estilo.css';

class Footer extends React.Component{
    render(){
        return(
                <div>
                    <Link to={'/'}> 
                        <img src={home} className="img-Home" /> 
                    </Link>
                </div>
        );
    }
    
}

export default Footer;