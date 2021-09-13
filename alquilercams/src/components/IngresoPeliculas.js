import React from 'react';

const IngresoPeliculas = ({peliculas, setPeliculas}) => {
    const handleChange = (e) => {
        setPeliculas({
          ...peliculas,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = () => {
          const requestInit = {
              method: 'POST',
              headers: {'Content-type' : 'application/json'},
              body: JSON.stringify(peliculas)
          }

          fetch('http://localhost:4002/pelicula/', requestInit)
          .then(res => res.json())
          .then(res => console.log(res))

          setPeliculas({
            idpelicula: "",
            marcapelicula: "",
            nombrepelicula: "",
            sensibilidadpelicula: "",
            formato: "",
            fk_iddispositivo: "",
          });
      }

      let {idpelicula, marcapelicula, nombrepelicula, sensibilidadpelicula, formato, fk_iddispositivo} = peliculas;

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="idpelicula" className="form-label">
                Id
              </label>
              <input required
                value={idpelicula}
                name="idpelicula"
                onChange={handleChange}
                type="number"
                id="id_dispositivo"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="marcapelicula" className="form-label">
                Marca
              </label>
              <input required
                value={marcapelicula}
                name="marcapelicula"
                onChange={handleChange}
                type="text"
                id="referencia"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="nombrepelicula" className="form-label">
                Nombre
              </label>
              <input required
                value={nombrepelicula}
                name="nombrepelicula"
                onChange={handleChange}
                type="text"
                id="estado"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="sensibilidadpelicula" className="form-label">
                Sensibilidad
              </label>
              <input required
                value={sensibilidadpelicula}
                name="sensibilidadpelicula"
                onChange={handleChange}
                type="text"
                id="dirdispositivo"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="formato" className="form-label">
                Formato
              </label>
              <input required
                value={formato}
                name="formato"
                onChange={handleChange}
                type="text"
                id="dirdispositivo"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="fk_iddispositivo" className="form-label">
                Dispositivos
              </label>
              <input required
                value={fk_iddispositivo}
                name="fk_iddispositivo"
                onChange={handleChange}
                type="text"
                id="dirdispositivo"
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

export default IngresoPeliculas;