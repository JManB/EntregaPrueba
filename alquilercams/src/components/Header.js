import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
              <div className="row head">
                <div className="col"><h1><b>ALQUILER DE CAMARAS - EL CAMARON</b></h1></div>
                <div className="col-md-auto"></div>
                <div className="col col-lg-2"><Link to="/principal/formulario">
                  <button type="button" className="btn btn-primary">
                        Ingresar
                  </button>
                </Link></div>
              </div>
              <div className="row justify-content-md-center nav-bar">
                  <div className="col-1" align="center">
                       <Link to="/principal/">HOME</Link> 
                  </div>
                  <div className="col-1" align="center">
                        <Link to="/principal/marca">MARCA</Link>
                  </div>
                  <div className="col-1" align="center">
                        <Link to="/principal/dispositivo">DISPOSITIVO</Link>
                  </div>
                  <div className="col-1" align="center">
                       <Link to="/principal/usuario">USUARIO</Link>
                  </div>
                  <div className="col-1" align="center">
                       <Link to="/principal/item">ITEM</Link>
                  </div>
                  <div className="col-1" align="center">
                       <Link to="/principal/alquiler">ALQUILER</Link>
                  </div>
                  <div className="col-1" align="center">
                       <Link to="/principal/servicio">SERVICIO</Link>
                  </div>
                  <div className="col-1" align="center">
                       <Link to="/principal/pelicula">PELICULAS</Link>
                  </div>
              </div>
        </div>
      );
}
 
export default Header;