import React from 'react';

const IngresoItems = ({items, setItems}) => {
    const handleChange = (e) => {
        setItems({
          ...items,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = () => {
          const requestInit = {
              method: 'POST',
              headers: {'Content-type' : 'application/json'},
              body: JSON.stringify(items)
          }

          fetch('http://localhost:4002/item/', requestInit)
          .then(res => res.json())
          .then(res => console.log(res))

          setItems({
            iditem: "",
            referenciaitem: "",
            estadoitem: "",
            fk_iddispositivo: "",
          });
      }

      let {iditem,referenciaitem,estadoitem,fk_iddispositivo} = items;

    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="iditem" className="form-label">
              Id
            </label>
            <input
              required
              value={iditem}
              name="iditem"
              onChange={handleChange}
              type="number"
              id="id_dispositivo"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="referenciaitem" className="form-label">
              Referencia
            </label>
            <input
              required
              value={referenciaitem}
              name="referenciaitem"
              onChange={handleChange}
              type="text"
              id="referencia"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="estadoitem" className="form-label">
              Estado
            </label>
            <select
              value={estadoitem}
              name="estadoitem"
              onChange={handleChange}
              type="text"
              id="estado"
              className="form-control"
            >
              {" "}
              <option>EN TIENDA</option>
              <option>ALQUILADO</option>
              <option>REPARACION</option>
              <option>PERDIDO</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="fk_iddispositivo" className="form-label">
              Dispositivo
            </label>
            <input
              required
              value={fk_iddispositivo}
              name="fk_iddispositivo"
              onChange={handleChange}
              type="number"
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

export default IngresoItems;