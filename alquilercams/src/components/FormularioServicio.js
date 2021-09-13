import ListadoServicio from './ListadoServicio';
import React, { useState, useEffect } from 'react';
import IngresoServicio from './IngresoServicio';
import Header from './Header';


const FormularioServicio = () => {

    const [servicios, setServicios] = useState({      
        idservicio: '',
        nombreservicio: '',
        dirservicio: '',
        tel : '',
        fk_id_servicio: ''
    });

    const [servicio, setServicio] = useState([]);         //Hook de estado donde se guardan los datos provenientes de la consulta en getServicio el cual proviene del hook useEffect

    const [updateServicio, setUpdateServicio] = useState(false);

    useEffect(() => {
        const getServicio = () => {
                fetch('http://localhost:4002/servicio')
                .then(res => res.json())
                .then(res => setServicio(res))
            }
            getServicio();
            setUpdateServicio(false);
    },[updateServicio])

    return (
        <>
        <Header />
        < br/>
        <div className="container">     
          <div className="row">
            <div className="col-5">
              <h2>Ingreso Usuario</h2>
               <IngresoServicio servicios={servicios} setServicios={setServicios}/> 
            </div>
            <div className="col-7">
               <ListadoServicio servicio={servicio} servicios={servicios} setUpdateServicio={setUpdateServicio}/>
            </div>
          </div>
        </div>
        </>
    );
};

export default FormularioServicio;