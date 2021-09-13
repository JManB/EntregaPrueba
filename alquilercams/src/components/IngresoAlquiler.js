import React, { useState, useEffect } from 'react';



const IngresoAlquiler = ({alquilers, setAlquilers, alquiler, dias}) => {

    const [validacion, setValidacion] = useState(true);

    const [tiempo, setTiempo] = useState(0)


    const handleChange = (e) => {

      setAlquilers(
        {
          ...alquilers,
          [e.target.name]: e.target.value
        })
       
        //validación de alquiler de usuario por 1 equipo por medio de setState Hook

        alquiler.map( alquiler => { 
          if(alquiler.idusuario==alquilers.idusuario){
            setValidacion(false)
          }
          if(alquiler.idusuario != alquilers.idusuario){
            setValidacion(true)
          }
        })

        //Validacion de fecha de usaurio por medio de consulta hook ubicado en Formulario alquiler y compartido por prop
        dias.map(dias => {
          if(dias.idusuario == alquilers.idusuario){
            if(dias.diff>7){
              setTiempo(dias.diff-7);
            }else{
              setTiempo(0);
            }
          }
        })
        
    }
      
      

      const handleSubmit = () => {
          const requestInit = {
              method: 'POST',
              headers: {'Content-type' : 'application/json'},
              body: JSON.stringify(alquilers)
          }

          fetch('http://localhost:4002/alquiler/', requestInit)
          .then(res => res.json())
          .then(res => console.log(res))

          setAlquilers({
            idalquiler: "",
            fechainicio: "",
            fechaentrega: "",
            idusuario: "",
            fk_iditem: "",
          });
      }

      let {idalquiler, fechainicio, fechaentrega, idusuario, fk_iditem} = alquilers;

        return (
          <>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="idalquiler" className="form-label">
                  Id
                </label>
                <input required
                  value={idalquiler}
                  name="idalquiler"
                  onChange={handleChange}
                  type="number"
                  id="id_dispositivo"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="idusuario" className="form-label">
                  Id Usuario 
                </label>
                <input required
                  value={idusuario}
                  name="idusuario"
                  onChange={handleChange}
                  type="number"
                  id="dirdispositivo"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="fk_iditem" className="form-label">
                  Id Dispositivo
                </label>
                <input required
                  value={fk_iditem}
                  name="fk_iditem"
                  onChange={handleChange}
                  type="number"
                  id="dirdispositivo"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="fech" className="form-label">
                  Fecha de Alquiler
                </label>
                <input required
                  value={fechainicio}
                  name="fechainicio"
                  onChange={handleChange}
                  type="date"
                  id="referencia"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="fechaentrega" className="form-label">
                  Fecha Entrega
                </label>
                {tiempo>7 ? <h3>"Castigo {tiempo} meses"</h3> : (<input required
                  value={fechaentrega}
                  name="fechaentrega"
                  onChange={handleChange}
                  type="date"
                  id="estado"
                  className="form-control"
                ></input>)}
              </div>
              
              <div className="mb-3">
               {validacion ? <button type="submit" className="btn btn-danger">
                  Ingresar
                </button> : <h1>El usuario ya tiene alquiler</h1>} 
              </div>
            </form>
          </>
      );
    
};

export default IngresoAlquiler;