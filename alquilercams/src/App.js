import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



import FormularioAlquiler from "./components/FormularioAlquiler";
import FormularioDispositivos from "./components/FormularioDispositivos";
import FormularioItem from "./components/FormularioItem";
import FormularioMarca from "./components/FormularioMarca";
import FormularioPelicula from './components/FormularioPelicula';
import FormularioServicio from "./components/FormularioServicio";
import FormularioUsuario from "./components/FormularioUsuario";
import NotFound from './pages/NotFound';
import Principal from './pages/Principal';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact  path="/" component={Principal} />
        <Route exact  path="/principal/servicio" component={FormularioServicio} />
        <Route exact  path="/principal/marca" component={FormularioMarca} />
        <Route exact  path="/principal/dispositivo" component={FormularioDispositivos} />
        <Route exact  path="/principal/usuario" component={FormularioUsuario} />
        <Route exact  path="/principal/item" component={FormularioItem} />
        <Route exact  path="/principal/pelicula" component={FormularioPelicula } />
        <Route exact  path="/principal/alquiler" component={FormularioAlquiler} />
        
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
