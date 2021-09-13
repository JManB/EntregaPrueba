import React from 'react';

const ListadoPelicula = ({pelicula,peliculas,setUpdatePelicula}) => {

    const handleDelete = idpelicula => {
    
          
        const requestInit = {
          method: 'DELETE',
        }
    
        fetch('http://localhost:4002/pelicula/'+ idpelicula, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
    
        setUpdatePelicula(true);
      }
    
    
      const handleUpdate = idpelicula => {
    
          const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(peliculas)
          }
    
          console.log(requestInit)
    
          fetch('http://localhost:4002/pelicula/'+ idpelicula, requestInit)
          .then(res => res.text())
          .then(res => console.log(res))
    
          setUpdatePelicula(true);
      }
    
    return (
      <>    
        <div className="container">        {/*Creación de tabla con la difución de datos que provienen del prop*/}
          <h2>pelicula</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>pelicula</th>
              <th>marca</th>
              <th>Nombre</th>
              <th>Sensibilidad</th>
              <th>Formato</th>
              <th>Dispositivo </th>
            </tr>
          </thead>
          <tbody>
            {pelicula.map((pelicula) => (
              <tr key={pelicula.idpelicula}>
                <td>{pelicula.idpelicula}</td>
                <td>{pelicula.marcapelicula}</td>
                <td>{pelicula.nombrepelicula}</td>
                <td>{pelicula.sensibiidadpelicula}</td>
                <td>{pelicula.formato}</td>
                <td>{pelicula.fk_iddispositivo}</td>
                <td>
                  <div className="mb-3">
                      <button onClick={() => handleDelete(pelicula.idpelicula)} className="btn btn-danger">Borrar</button>
                  </div>
                  <div className="mb-3">
                      <button onClick={()=>handleUpdate(pelicula.idpelicula)} className="btn btn-dark">Actualizar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
};

export default ListadoPelicula;