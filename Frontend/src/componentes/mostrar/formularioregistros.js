import React from 'react';
import {Link} from 'react-router-dom'
import '../estilos/estilo.css';
//
import user from '../img/user-solid.svg'; 
import mensaje from '../img/envelope-solid.svg'; 
import clave from '../img/key-solid.svg'; 

class FormularioRegistros extends React.Component {
    render() {
        return (
            //Creo un formulario para registrarse con la clase formulario para darle estilo
           
                <form className="formulario">
                    <h1 className="titulo">Registrate</h1>
                    <div className="contenedor">
                        
                        <div className="input-contenedor" >
                            <img src={user} className="icon" width="20px" height="20px" alt="Usuario"/>
                                <input type="text" placeholder="Nombre Completo" />
                            
                        </div>

                        <div className="input-contenedor">
                            <img src={mensaje} className="icon" width="20px" height="20px" alt="Mensaje" />
                                <input type="text" placeholder="Correo Electronico"/>
                                
                        </div>

                        <div className="input-contenedor">
                            <img src={clave} className="icon" width="20px" height="20px" alt="Clave" />
                                <input type="password" placeholder="Contraseña" />
                            
                        </div>

                        <input type="submit" value="Registrate" className="button"/>

                        <p className="text-formulario">¿Ya tienes una cuenta? 
                        <Link className="link" to={'./login'}> Iniciar sesión </Link></p>

                    </div>
                </form>
        );
    }
}

export default FormularioRegistros;