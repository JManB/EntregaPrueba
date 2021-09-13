import React from 'react';

const ListadoMarca = ({marca, marcas, setUpdateMarca,servicio}) => {         //Prop Proveniente de la consulta hecha en Formulario Marca
    
    const handleDelete = id_marca => {
    
        console.log(id_marca);
    
        const requestInit = {
          method: 'DELETE',
        }
    
        fetch('http://localhost:4002/marca/'+ id_marca, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
    
        setUpdateMarca(true);
      }
    
    
      const handleUpdate = id_marca => {
    
          const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(marcas)
          }
    
          console.log(requestInit)
    
          fetch('http://localhost:4002/marca/'+ id_marca, requestInit)
          .then(res => res.text())
          .then(res => console.log(res))
    
          setUpdateMarca(true);
      }
    
    return (
      <>    
        <div className="container">        {/*Creación de tabla con la difución de datos que provienen del prop*/}
          <h2>Marca</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Marca</th>
            </tr>
          </thead>
          <tbody>
            {marca.map((marca) => (
              <tr key={marca.id_marca}>
                <td>{marca.id_marca}</td>
                <td>{marca.marca}</td>
                <td>
                  <div className="mb-3">
                      <button onClick={() => handleDelete(marca.id_marca)} className="btn btn-danger">Borrar</button>
                  </div>
                  <div className="mb-3">
                      <button onClick={()=>handleUpdate(marca.id_marca)} className="btn btn-dark">Actualizar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );

}

export default ListadoMarca;