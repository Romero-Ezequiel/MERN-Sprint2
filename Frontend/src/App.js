
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/mostrar/home';
import Login from './componentes/mostrar/login';
import Ciudades from './componentes/mostrar/ciudades';
import Registrarse from './componentes/mostrar/registrarse';


function App() {
  return (
    <div className="App">

      <Router>
        <div className="container p-10">
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/registrarse' component={Registrarse} />
          <Route path='/ciudades' component={Ciudades} />
        </div>

      </Router>
    </div>
  );
}


export default App;
