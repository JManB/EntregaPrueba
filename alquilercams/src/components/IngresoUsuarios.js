import React from 'react';

const IngresoUsuarios = ({usuarios, setUsuarios}) => {
    const handleChange = (e) => {
        setUsuarios({
          ...usuarios,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = () => {
          const requestInit = {
              method: 'POST',
              headers: {'Content-type' : 'application/json'},
              body: JSON.stringify(usuarios)
          }

          fetch('http://localhost:4002/usuario/', requestInit)
          .then(res => res.json())
          .then(res => console.log(res))

          setUsuarios({
            idusuario: "",
            nombreusuario: "",
            apellidousuario: "",
            emailusuario: "",
            passwordusuario: "",
            rollusuario: "",
          });
      }

      let {idusuario, nombreusuario, apellidousuario, emailusuario, passwordusuario, rollusuario} = usuarios;



    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="idusuario" className="form-label">
                Id usuario
              </label>
              <input required
                value={idusuario}
                name="idusuario"
                onChange={handleChange}
                type="number"
                id="id_usuario"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="nombreusuario" className="form-label">
                Nombre usuario
              </label>
              <input required
                value={nombreusuario}
                name="nombreusuario"
                onChange={handleChange}
                type="text"
                id="nomusuario"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="apellidousuario" className="form-label">
                Apellido
              </label>
              <input required
                value={apellidousuario}
                name="apellidousuario"
                onChange={handleChange}
                type="text"
                id="dirusuario"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="emailusuario" className="form-label">
                Email usuario
              </label>
              <input required
                value={emailusuario}
                name="emailusuario"
                onChange={handleChange}
                type="text"
                id="telefono"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="passwordusuario" className="form-label">
                password
              </label>
              <input required
                value={passwordusuario}
                name="passwordusuario"
                onChange={handleChange}
                type="password"
                id="nomusuario"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="rollusuario" className="form-label">
                Roll usuario
              </label>
              <input required
                value={rollusuario}
                name="rollusuario"
                onChange={handleChange}
                type="text"
                id="nomusuario"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-danger">
                Ingresar
              </button>
            </div>
          </form>
        </>
    );
};

export default IngresoUsuarios;