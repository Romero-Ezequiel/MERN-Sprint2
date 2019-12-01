import React from 'react';
import Header from './header';
import Footer from './footer';
import FormularioRegistros from './formularioregistros';

function Registrarse() {
  return (
    <div className="CreateAccount">
      <Header />
      <FormularioRegistros />
      <Footer />
    </div>
  );
}
export default Registrarse;
