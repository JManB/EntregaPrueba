import React from 'react';


const IngresoDispositvos = ({dispositivos, setDispositivos}) => {
    const handleChange = (e) => {
        setDispositivos({
          ...dispositivos,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = () => {
          const requestInit = {
              method: 'POST',
              headers: {'Content-type' : 'application/json'},
              body: JSON.stringify(dispositivos)
          }

          fetch('http://localhost:4002/dispo/', requestInit)
          .then(res => res.json())
          .then(res => console.log(res))

          setDispositivos({
            iddispositivo: "",
            modelodispositivo: "",
            flash: "",
            isomin: "",
            isomax: "",
            formato: "",
            fk_id_marca: "",
          });
      }

      let {iddispositivo,modelodispositivo,flash,isomin,isomax,formato,fk_id_marca} = dispositivos;

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="iddispositivo" className="form-label">
                Id dispositivo
              </label>
              <input required
                value={iddispositivo}
                name="iddispositivo"
                onChange={handleChange}
                type="number"
                id="id_dispositivo"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="modelodispositivo" className="form-label">
                Modelo dispositivo
              </label>
              <input required
                value={modelodispositivo}
                name="modelodispositivo"
                onChange={handleChange}
                type="text"
                id="nomdispositivo"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="flash" className="form-label">
                Flash
              </label>
              <input required
                value={flash}
                name="flash"
                onChange={handleChange}
                type="text"
                id="dirdispositivo"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="isomin" className="form-label">
                Iso Min
              </label>
              <input required
                value={isomin}
                name="isomin"
                onChange={handleChange}
                type="number"
                id="dirdispositivo"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="isomax" className="form-label">
                Iso Max
              </label>
              <input required
                value={isomax}
                name="isomax"
                onChange={handleChange}
                type="number"
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
                name="number"
                onChange={handleChange}
                type="text"
                id="dirdispositivo"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="fk_id_marca" className="form-label">
                Marca
              </label>
              <input required
                value={fk_id_marca}
                name="fk_id_marca"
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

export default IngresoDispositvos;