//Importo react desde su dependencia que instale
import React from 'react';

//Importo la imagen de MYtinerary para embeberla en la cabecera 
import MYtinerary from '../img/MYtinerary.png';
import '../estilos/estilo.css';


class Header extends React.Component{
    render() {
        return(
            //Utilizo JSX para armar la interfaz de usuario del componente header
            <img src={MYtinerary} className="App-title"  />
        );
    }
}
export default Header;