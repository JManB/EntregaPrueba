import React from 'react';

const IngresoServicio = ({servicios, setServicios}) => {

    const handleChange = (e) => {
        setServicios({
          ...servicios,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = () => {
          const requestInit = {
              method: 'POST',
              headers: {'Content-type' : 'application/json'},
              body: JSON.stringify(servicios)
          }

          fetch('http://localhost:4002/servicio/', requestInit)
          .then(res => res.json())
          .then(res => console.log(res))

          setServicios({
            idservicio: "",
            nombreservicio: "",
            dirservicio: "",
            tel: "",
            fk_id_servicio: "",
          });
      }

      let {idservicio,nombreservicio,dirservicio,tel,fk_id_servicio} = servicios;



    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="id_servicio" className="form-label">
                Id servicio
              </label>
              <input required
                value={idservicio}
                name="idservicio"
                onChange={handleChange}
                type="number"
                id="id_servicio"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="nombreservicio" className="form-label">
                Nombre servicio
              </label>
              <input required
                value={nombreservicio}
                name="nombreservicio"
                onChange={handleChange}
                type="text"
                id="nomservicio"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="dirservicio" className="form-label">
                Dirección
              </label>
              <input required
                value={dirservicio}
                name="dirservicio"
                onChange={handleChange}
                type="text"
                id="dirservicio"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="tel" className="form-label">
                Teléfono
              </label>
              <input required
                value={tel}
                name="tel"
                onChange={handleChange}
                type="text"
                id="telefono"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="nomservicio" className="form-label">
                Servicio Autorizado
              </label>
              <input required
                value={fk_id_servicio}
                name="fk_id_servicio"
                onChange={handleChange}
                type="text"
                id="nomservicio"
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

export default IngresoServicio;