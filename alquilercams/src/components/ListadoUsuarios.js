import React from 'react';

const ListadoUsuarios = ({usuario, usuarios, setUpdateUsuario}) => {
    const handleDelete = idusuario => {
    
        console.log(idusuario);
    
        const requestInit = {
          method: 'DELETE',
        }
    
        fetch('http://localhost:4002/usuario/'+ idusuario, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
    
        setUpdateUsuario(true);
      }
    
    
      const handleUpdate = idusuario => {
    
          const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(usuarios)
          }
    
          console.log(requestInit)
    
          fetch('http://localhost:4002/usuario/'+ idusuario, requestInit)
          .then(res => res.text())
          .then(res => console.log(res))
    
          setUpdateUsuario(true);   
      }
    
    return (
        <>
        <div className="container">        {/*Creación de tabla con la difución de datos que provienen del prop*/}
        <h2>usuario</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuario.map((usuario) => (
            <tr key={usuario.idusuario}>
              <td>{usuario.idusuario}</td>
              <td>{usuario.nombreusuario}</td>
              <td>{usuario.apellidousuario}</td>
              <td>{usuario.emailusuario}</td>
             
              <td>
                <div className="mb-3">
                    <button onClick={() => handleDelete(usuario.idusuario)} className="btn btn-danger">Borrar</button>
                </div>
                <div className="mb-3">
                    <button onClick={()=>handleUpdate(usuario.idusuario)} className="btn btn-dark">Actualizar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
    );
};

export default ListadoUsuarios;