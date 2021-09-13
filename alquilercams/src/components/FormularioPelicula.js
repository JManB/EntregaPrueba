import React, { useState, useEffect } from 'react';
import Header from './Header';
import IngresoPeliculas from './IngresoPeliculas';
import ListadoPelicula from './ListadoPelicula';


const FormularioPelicula = () => {

    const [peliculas, setPeliculas] = useState({
        idpelicula:'',
        marcapelicula:'',
        nombrepelicula:'',
        sensibilidadpelicula:'', 
        formato:'', 
        fk_iddispositivo:''
      });
  
      const [pelicula, setPelicula] = useState([]);         //Hook de estado donde se guardan los datos provenientes de la consulta en getpelicula el cual proviene del hook useEffect
  
      const [updatePelicula, setUpdatePelicula] = useState(false);
  
      useEffect(() => {
          const getPelicula = () => {
                  fetch('http://localhost:4002/pelicula/')
                  .then(res => res.json())
                  .then(res => setPelicula(res))
              }
              getPelicula();
              setUpdatePelicula(false);
  
      },[updatePelicula])
  
      return (
          <>
          <Header />
          < br/>
          <div className="container">     
            <div className="row">
              <div className="col-5">
                <h2>Ingreso Pelicula</h2>
                 <IngresoPeliculas peliculas={peliculas} setPeliculas={setPeliculas} />
              </div>
              <div className="col-7">
                 <ListadoPelicula pelicula={pelicula} peliculas={peliculas} setupdatePelicula={setUpdatePelicula} />
              </div>
            </div>
          </div>
          </>
      );
};

export default FormularioPelicula;