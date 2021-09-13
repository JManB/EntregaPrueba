import React, { useState, useEffect } from 'react';
import Header from './Header';
import IngresoAlquiler from './IngresoAlquiler';
import ListadoAlquiler from './ListadoAlquiler';
import Validaciones from './Validaciones';


const FormularioAlquiler = () => {
    
    const [alquilers, setAlquilers] = useState({
        idalquiler:'',
        fechainicio:'',
        fechaentrega:'', 
        idusuario:'',
        fk_iditem:''
      });
  
      const [alquiler, setAlquiler] = useState([]);         //Hook de estado donde se guardan los datos provenientes de la consulta en getalquiler el cual proviene del hook useEffect
      

      const [updateAlquiler, setUpdateAlquiler] = useState(false);

      const [dias, setDias] = useState([]);
  
      useEffect(() => {
          const getalquiler = () => {
                  fetch('http://localhost:4002/alquiler/')
                  .then(res => res.json())
                  .then(res => setAlquiler(res))
              }
          
          const getDias = () => {
            fetch('http://localhost:4002/alqui/')
            .then(res => res.json())
            .then(res => setDias(res))
          }

              getalquiler();
              getDias();
              setUpdateAlquiler(false);
  
      },[updateAlquiler])
          

      
      return (
          <>
          <Header />
          < br/>
          <div className="container">     
            <div className="row">
              <div className="col-5">
                <h2>Ingreso Alquiler</h2>
                 <IngresoAlquiler dias={dias} alquilers={alquilers} setAlquilers={setAlquilers} alquiler={alquiler}/>
              </div>
              <div className="col-7">
                 <ListadoAlquiler alquiler={alquiler} alquilers={alquilers} setUpdateAlquiler={setUpdateAlquiler} />
              </div>
            </div>
            
          </div>
          </>
      );
};

export default FormularioAlquiler;