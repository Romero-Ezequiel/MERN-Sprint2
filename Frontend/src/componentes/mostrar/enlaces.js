import React from 'react';
import {Link} from 'react-router-dom'
import '../estilos/estilo.css';
class Enlaces extends React.Component{
    render(){
        return(
          <div className="App-links">
              <p>
              ¿Quieres construir tu propio MYtinerary?
              </p>

              <div className="textLeft App-login">
                <Link to={'./login'}>
                  <p>Login</p> 
                </Link>
              </div> 

              <div className="textRight App-createAccount">
                <Link to={'./registrarse'}>
                  <p>Registrarse</p> 
                </Link>
              </div>
           </div>
        );
    }

}

export default Enlaces;