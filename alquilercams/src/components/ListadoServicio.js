import React from 'react';



const ListadoServicio = ({servicio, servicios, setUpdateServicio}) => {

    const handleDelete = id_servicio => {
    
        console.log(id_servicio);
    
        const requestInit = {
          method: 'DELETE',
        }
    
        fetch('http://localhost:4002/servicio/'+ id_servicio, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
    
        setUpdateServicio(true);
      }
    
    
      const handleUpdate = id_servicio => {
    
          const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(servicios)
          }
    
          console.log(requestInit)
    
          fetch('http://localhost:4002/servicio/'+ id_servicio, requestInit)
          .then(res => res.text())
          .then(res => console.log(res))
    
          setUpdateServicio(true);
          
      }
    


    return (
        <>
        <div className="container">        {/*Creación de tabla con la difución de datos que provienen del prop*/}
        <h2>servicio</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Telefono</th>
            <th>servicio</th>
          </tr>
        </thead>
        <tbody>
          {servicio.map((servicio) => (
            <tr key={servicio.idservicio}>
              <td>{servicio.idservicio}</td>
              <td>{servicio.nombreservicio}</td>
              <td>{servicio.dirservicio}</td>
              <td>{servicio.tel}</td>
              <td>{servicio.fk_id_marca}</td>
              <td>
                <div className="mb-3">
                    <button onClick={() => handleDelete(servicio.idservicio)} className="btn btn-danger">Borrar</button>
                </div>
                <div className="mb-3">
                    <button onClick={()=>handleUpdate(servicio.idservicio)} className="btn btn-dark">Actualizar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    );
};

export default ListadoServicio;