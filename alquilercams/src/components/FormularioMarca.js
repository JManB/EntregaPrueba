import React, { useState, useEffect } from 'react';
import Header from './Header';
import IngresoMarca from './IngresoMarca';
import ListadoMarca from './ListadoMarca';


function FormularioMarca() {

    const [marcas, setMarcas] = useState({      
        id_marca: '',
        anchormarca: ''
    });

    const [marca, setMarca] = useState([]);         //Hook de estado donde se guardan los datos provenientes de la consulta en getMarca el cual proviene del hook useEffect

    const [updateMarca, setUpdateMarca] = useState(false);

    useEffect(() => {
        const getMarca = () => {
                fetch('http://localhost:4002/marca')
                .then(res => res.json())
                .then(res => setMarca(res))
            }
            getMarca();
            setUpdateMarca(false);
    },[updateMarca])



    return (  
      <>
        <Header />
        < br/>
        <div className="container">
        <div><h1>INTERFAZ DE ADMINISTRADOR</h1><br /></div>
        
          <div className="row">
            <div className="col-5">
              <h2>Ingreso Usuario</h2>
                <IngresoMarca marcas={marcas} setMarcas={setMarcas}/>
            </div>
            <div className="col-7">
               <ListadoMarca marca={marca} marcas={marcas} setUpdateMarca={setUpdateMarca}/>
            </div>
          </div>
        </div>
      </>
    );
}

export default FormularioMarca;