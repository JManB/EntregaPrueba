import React from 'react';

const ListadoAlquiler = ({alquiler, alquilers, setUpdateAlquiler}) => {
    const handleDelete = idalquiler => {
    
        console.log(idalquiler);
    
        const requestInit = {
          method: 'DELETE',
        }
    
        fetch('http://localhost:4002/alquiler/'+ idalquiler, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
    
        setUpdateAlquiler(true);
      }
    
    
      const handleUpdate = idalquiler => {
    
          const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(alquilers)
          }
    
          console.log(requestInit)
    
          fetch('http://localhost:4002/alquiler/'+ idalquiler, requestInit)
          .then(res => res.text())
          .then(res => console.log(res))
    
          setUpdateAlquiler(true);   
      }
    
    return (
        <>
        <div className="container">        {/*Creación de tabla con la difución de datos que provienen del prop*/}
        <h2>Alquiler</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fecha de Alquiler</th>
            <th>Fecha de Entrega</th>
            <th>Id Usuario</th>
            <th>Dispositivo</th>
          </tr>
        </thead>
        <tbody>
          {alquiler.map((alquiler) => (
            <tr key={alquiler.idalquiler}>
              <td>{alquiler.idalquiler}</td>
              <td>{alquiler.fechainicio}</td>
              <td>{alquiler.fechaentrega}</td>
              <td>{alquiler.idusuario}</td>
              <td>{alquiler.fk_iditem}</td>
              <td>
                <div className="mb-3">
                    <button onClick={() => handleDelete(alquiler.idalquiler)} className="btn btn-danger">Borrar</button>
                </div>
                <div className="mb-3">
                    <button onClick={()=>handleUpdate(alquiler.idalquiler)} className="btn btn-dark">Actualizar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    );
};

export default ListadoAlquiler;