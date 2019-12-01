import React from 'react';
import Header from './header';
import Footer from './footer';
import FormularioLogin from './formulariologin';

function Login() {
  return (
    <div className="Login">
      <Header />
      <FormularioLogin />
      <Footer />
    </div>
  );
}

export default Login;
