import React from 'react';

const IngresoMarca = ({marcas, setMarcas}) => {

    const handleChange = (e) => {
        setMarcas({
          ...marcas,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = () => {
          const requestInit = {
              method: 'POST',
              headers: {'Content-type' : 'application/json'},
              body: JSON.stringify(marcas)
          }

          fetch('http://localhost:4002/marca/', requestInit)
          .then(res => res.json())
          .then(res => console.log(res))

          setMarcas({
            id_marca: "",
            marca: ""
          })
      }

      let {id_marca,marca} = marcas;



    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="id_marca" className="form-label">
                Id marca
              </label>
              <input required
                value={id_marca}
                name="id_marca"
                onChange={handleChange}
                type="number"
                id="id_marca"
                className="form-control"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="nom_marca" className="form-label">
                Nombre marca
              </label>
              <input required
                value={marca}
                name="marca"
                onChange={handleChange}
                type="text"
                id="nommarca"
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

export default IngresoMarca;