import React from 'react';

//
import { Route, BrowserRouter as Router } from 'react-router-dom';

//
import Home from './componentes/mostrar/home';

//
import Login from './componentes/mostrar/login';

//
import Ciudades from './componentes/mostrar/ciudades';

//
import Registrarse from './componentes/mostrar/registrarse';

//
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/registrarse' component={Registrarse} />
        <Route path='/ciudades' component={Ciudades} />
      </Router>
    </div>
  );
}

//
export default App;
