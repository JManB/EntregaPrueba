import React from 'react';

const ListadoItems = ({item, items, setUpdateItem}) => {

    const handleDelete = iditem => {
    
        console.log(iditem);
    
        const requestInit = {
          method: 'DELETE',
        }
    
        fetch('http://localhost:4002/item/'+ iditem, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
    
        setUpdateItem(true);
      }
    
    
      const handleUpdate = iditem => {
    
          const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(items)
          }
    
          console.log(requestInit)
    
          fetch('http://localhost:4002/item/'+ iditem, requestInit)
          .then(res => res.text())
          .then(res => console.log(res))
    
          setUpdateItem(true);
          
      }
    


    return (
        <>
        <div className="container">        {/*Creación de tabla con la difución de datos que provienen del prop*/}
        <h2>item</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Referencia</th>
            <th>Estado</th>
            <th>Dispositivo</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item) => (
            <tr key={item.iditem}>
              <td>{item.iditem}</td>
              <td>{item.referenciaitem}</td>
              <td>{item.estadoitem}</td>
              <td>{item.fk_iddispositivo}</td>
              <td>
                <div className="mb-3">
                    <button onClick={() => handleDelete(item.iditem)} className="btn btn-danger">Borrar</button>
                </div>
                <div className="mb-3">
                    <button onClick={()=>handleUpdate(item.iditem)} className="btn btn-dark">Actualizar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    );
};

export default ListadoItems;