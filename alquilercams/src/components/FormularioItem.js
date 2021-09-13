import React, { useState, useEffect } from 'react';
import Header from './Header';
import IngresoAlquiler from './IngresoAlquiler';
import IngresoItems from './IngresoItems';
import ListadoItems from './ListadoItems';


const FormularioItem = () => {
    const [items, setItems] = useState({      
        iditem:'', 
        referenciaitem:'', 
        estadoitem:'', 
        fk_iddispositivo:''
    });

    const [item, setItem] = useState([]);         //Hook de estado donde se guardan los datos provenientes de la consulta en getitem el cual proviene del hook useEffect

    const [updateItem, setUpdateItem] = useState(false);

    useEffect(() => {
        const getItem = () => {
                fetch('http://localhost:4002/item')
                .then(res => res.json())
                .then(res => setItem(res))
            }
            getItem();
            setUpdateItem(false);
    },[updateItem])


    return (  
        <>
        <Header />
        < br/>
        <div className="container">
        <div><h1>INTERFAZ DE ADMINISTRADOR</h1><br /></div>
        
          <div className="row">
            <div className="col-5">
              <h2>Ingreso Items</h2>
                <IngresoItems items={items} setItems={setItems} />
            </div>
            <div className="col-7">
               <ListadoItems item={item} items={items} setUpdateItem={setUpdateItem}/>
            </div>
          </div>
        </div>
       </>
    );
};

export default FormularioItem;