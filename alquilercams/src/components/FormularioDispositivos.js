import ListadoDispositivos from './ListadoDispositivos';
import React, { useState, useEffect } from 'react';
import IngresoDispositvos from './IngresoDispositvos';
import Header from './Header';



const FormularioDispositivos = () => {
    
    const [dispositivos, setDispositivos] = useState({
      iddispositivo: '',
      modelodispositivo:'',
      flash:'',
      isomin:'',
      isomax:'',
      formato:'',
      fk_id_marca:''
    });

    const [dispositivo, setDispositivo] = useState([]);         //Hook de estado donde se guardan los datos provenientes de la consulta en getdispositivo el cual proviene del hook useEffect

    const [updateDispositivo, setUpdateDispositivo] = useState(false);

    useEffect(() => {
        const getDispositivo = () => {
                fetch('http://localhost:4002/dispo/')
                .then(res => res.json())
                .then(res => setDispositivo(res))
            }
            getDispositivo();
            setUpdateDispositivo(false);

    },[updateDispositivo])

    return (
        <>
        <Header />
        < br/>
        <div className="container">     
          <div className="row">
            <div className="col-5">
              <h2>Ingreso Dispositivo</h2>
               <IngresoDispositvos dispositivos={dispositivos} setDispositivos={setDispositivos} />
            </div>
            <div className="col-7">
               <ListadoDispositivos dispositivo={dispositivo} dispositivos={dispositivos} setUpdateDispositivo={setUpdateDispositivo} />
            </div>
          </div>
        </div>
        </>
    );
};

export default FormularioDispositivos;