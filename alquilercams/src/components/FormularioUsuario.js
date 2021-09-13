import React, { useState, useEffect } from 'react';
import Header from './Header';
import IngresoUsuarios from './IngresoUsuarios';
import ListadoUsuarios from './ListadoUsuarios';


const FormularioUsuario = () => {
    const [usuarios, setUsuarios] = useState({      
        idusuario:'',
        nombreusuario:'',
        apellidousuario:'',
        emailusuario:'',
        passwordusuario:'',
        rollusuario:''
    });

    const [usuario, setUsuario] = useState([]);         //Hook de estado donde se guardan los datos provenientes de la consulta en getusuario el cual proviene del hook useEffect

    const [updateUsuario, setUpdateUsuario] = useState(false);

    useEffect(() => {
        const getUsuario = () => {
                fetch('http://localhost:4002/usuario')
                .then(res => res.json())
                .then(res => setUsuario(res))
            }
            getUsuario();
            setUpdateUsuario(false);
    },[updateUsuario])



    return (
      <> 
        <Header />
        < br/>
        <div className="container">
        <div><h1>INTERFAZ DE ADMINISTRADOR</h1><br /></div>
        
          <div className="row">
            <div className="col-5">
              <h2>Ingreso usuarios</h2>
               <IngresoUsuarios usuarios={usuarios} setUsuarios={setUsuarios} />
            </div>
            <div className="col-7">
               <ListadoUsuarios usuario={usuario} usuarios={usuarios} setUpdateUsuario={setUpdateUsuario}/>
            </div>
          </div>
        </div>
      </>
    );
};

export default FormularioUsuario;