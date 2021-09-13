import React from 'react';

const ListadoDispositivos = ({dispositivo, dispositivos, setUpdateDispositivo}) => {

    const handleDelete = id_dispositivo => {
    
        console.log(id_dispositivo);
    
        const requestInit = {
          method: 'DELETE',
        }
    
        fetch('http://localhost:4002/dispo/'+ id_dispositivo, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
    
        setUpdateDispositivo(true);
      }
    
    
      const handleUpdate = id_dispositivo => {
    
          const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(dispositivos)
          }
    
          console.log(requestInit)
    
          fetch('http://localhost:4002/dispo/'+ id_dispositivo, requestInit)
          .then(res => res.text())
          .then(res => console.log(res))
    
          setUpdateDispositivo(true);   
      }
    
    return (
        <>
        <div className="container">        {/*Creación de tabla con la difución de datos que provienen del prop*/}
        <h2>Dispositivo</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>modelo</th>
            <th>Flash</th>
            <th>Telefono</th>
            <th>IsoMin</th>
            <th>IsoMax</th>
            <th>Formato</th>
            <th>Marca</th>
          </tr>
        </thead>
        <tbody>
          {dispositivo.map((dispositivo) => (
            <tr key={dispositivo.iddispositivo}>
              <td>{dispositivo.iddispositivo}</td>
              <td>{dispositivo.modelodispositivo}</td>
              <td>{dispositivo.flash}</td>
              <td>{dispositivo.isomin}</td>
              <td>{dispositivo.isomax}</td>
              <td>{dispositivo.formato}</td>
              <td>{dispositivo.fk_id_marca}</td>
              <td>
                <div className="mb-3">
                    <button onClick={() => handleDelete(dispositivo.iddispositivo)} className="btn btn-danger">Borrar</button>
                </div>
                <div className="mb-3">
                    <button onClick={()=>handleUpdate(dispositivo.iddispositivo)} className="btn btn-dark">Actualizar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    );
};

export default ListadoDispositivos;