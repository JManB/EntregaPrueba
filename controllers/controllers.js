const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'root',
    database: 'alquilercamaras'
}

const pool = new Pool(config);

/********* Crud Tabla ServicioTecnico */

const getServicio= async (req, res) =>{
    const resp = await pool.query('select * from serviciotecnico');
    res.status(200).json(resp.rows);
}

const createServicio = async (req, res) => {
    const { idservicio,nombreservicio,dirservicio,tel,fk_id_marca} = req.body;
    const resp = await pool.query('INSERT INTO serviciotecnico (idservicio,nombreservicio,dirservicio,tel,fk_id_marca) VALUES($1, $2, $3, $4, $5)', [idservicio,nombreservicio,dirservicio,tel,fk_id_marca]);
    res.json({
        message: 'user added succesfully',
        body: {
            user:{idservicio,nombreservicio,dirservicio,tel,id_marca} 

        }
    });
}

const updateServicio = async (req,res) => {
    const idPersona = req.params.id_persona;
    const {idservicio,nombreservicio,dirservicio,tel,fk_id_marca} = req.body;
    const resp = await pool.query('UPDATE serviciotecnico SET nombreservicio= $1, dirservicio = $2, tel = $3, fk_id_marca = $4 WHERE idservicio = $5', [nombreservicio,dirservicio,tel,fk_id_marca,idservicio])
    res.send('Usuario Actualizado')
}

const deleteServicio = async (req, res) => {
    const id_servicio = req.params.idservicio;
    const prop = await pool.query('DELETE FROM serviciotecnico WHERE idservicio = $1', [id_servicio]);
    res.json(`User ${id_servicio} was deleted`);
}

//*******************************************************/
//********************* CRUD MARCA **********************/


const getMarca= async (req, res) =>{
    const resp = await pool.query('select * from marca');
    res.status(200).json(resp.rows);
}

const createMarca = async (req, res) => {
    const { id_marca, marca} = req.body;
    const resp = await pool.query('INSERT INTO marca (id_marca, marca) VALUES($1, $2)', [id_marca, marca]);
    res.json({
        message: 'user added succesfully',
        body: {
            user:{id_marca, marca} 

        }
    });
}

const updateMarca = async (req,res) => {
    const idmarca = req.params.id_marca;
    const {id_marca, marca} = req.body;
    const resp = await pool.query('UPDATE marca SET marca = $2 WHERE id_marca = $1', [idmarca, marca])
    res.send('Usuario Actualizado')
}

const deleteMarca = async (req, res) => {
    const id_marca = req.params.id_marca;
    const prop = await pool.query('DELETE FROM marca WHERE id_marca = $1', [id_marca]);
    res.json(`User ${id_marca} was deleted`);
}


//******************CRUD DISPOSITIVO **************************/

const getDispositvo= async (req, res) =>{
    const resp = await pool.query('select * from dispositivo');
    res.status(200).json(resp.rows);
}

const createDispositivo = async (req, res) => {
    const { iddispositivo, modelodispositivo, flash, isomin, isomax, formato, fk_id_marca } = req.body;
    const resp = await pool.query('INSERT INTO dispositivo (iddispositivo, modelodispositivo, flash, isomin, isomax, formato, fk_id_marca) VALUES ($1, $2, $3, $4, $5, $6, $7);', [iddispositivo, modelodispositivo, flash, isomin, isomax, formato, fk_id_marca]);
    res.json({
        message: 'user added succesfully',
        body: {
            user:{iddispositivo, modelodispositivo, flash, isomin, isomax, formato, fk_id_marca} 

        }
    });
}

const updateDispositivo = async (req,res) => {
    const id_dispositivo = req.params.iddispositvo;
    const {iddispositivo, modelodispositivo, flash, isomin, isomax, formato, fk_id_marca} = req.body;
    const resp = await pool.query('UPDATE dispositivo SET modelodispositivo=$2, flash=$3, isomin=$4, isomax=$5, formato=$6, fk_id_marca=$7 WHERE iddispositivo=$1;', [iddispositivo, modelodispositivo, flash, isomin, isomax, formato, fk_id_marca])
    res.send('Usuario Actualizado')
}

const deleteDispositivo = async (req, res) => {
    const id_dispositivo = req.params.iddispositivo;
    const prop = await pool.query('DELETE FROM dispositivo WHERE iddispositivo = $1', [id_dispositivo]);
    res.json(`User ${id_dispositivo} was deleted`);
}

//**********************CRUD ITEMS ***********************/

const getItem= async (req, res) =>{
    const resp = await pool.query('select * from item');
    res.status(200).json(resp.rows);
}

const createItem = async (req, res) => {
    const { iditem, referenciaitem, estadoitem, fk_iddispositivo } = req.body;
    const resp = await pool.query('INSERT INTO item (iditem, referenciaitem, estadoitem, fk_iddispositivo) VALUES ($1, $2, $3, $4);', [iditem, referenciaitem, estadoitem, fk_iddispositivo]);
    res.json({
        message: 'user added succesfully',
        body: {
            user:{iditem, referenciaitem, estadoitem, fk_iddispositivo} 

        }
    });
}

const updateItem = async (req,res) => {
    const id_item = req.params.iditem;
    const {iditem, referenciaitem, estadoitem, fk_iddispositivo} = req.body;
    const resp = await pool.query('UPDATE item SET iditem=$1, referenciaitem=$2, estadoitem=$3, fk_iddispositivo=$4 WHERE iditem=$5', [iditem, referenciaitem, estadoitem, fk_iddispositivo, id_item])
    res.send('Usuario Actualizado')
}

const deleteItem = async (req, res) => {
    const id_item = req.params.iditem;
    const prop = await pool.query('DELETE FROM item WHERE iditem = $1', [id_item]);
    res.json(`User ${id_item} was deleted`);
}

/******************* CRUD USUARIO **********************/


const getUsurario= async (req, res) =>{
    const resp = await pool.query('select * from usuario');
    res.status(200).json(resp.rows);
}

const createUsuario = async (req, res) => {
    const { idusuario, nombreusuario, apellidousuario, emailusuario, passwordusuario, rollusuario } = req.body;
    const resp = await pool.query('INSERT INTO usuario (idusuario, nombreusuario, apellidousuario, emailusuario, passwordusuario, rollusuario) VALUES ($1, $2, $3, $4, $5, $6);', [idusuario, nombreusuario, apellidousuario, emailusuario, passwordusuario, rollusuario]);
    res.send('user added succesfully');
}

const updateUsuario = async (req,res) => {
    const id_usuario = req.params.idusuario;
    const {idusuario, nombreusuario, apellidousuario, emailusuario, passwordusuario, rollusuario} = req.body;
    const resp = await pool.query('UPDATE usuario SET idusuario=$1, nombreusuario=$2, apellidousuario=$3, emailusuario=$4, passwordusuario=$5, rollusuario=$6 WHERE idusuario=$7' , [idusuario, nombreusuario, apellidousuario, emailusuario, passwordusuario, rollusuario,id_usuario])
    res.send('Usuario Actualizado')
}

const deleteUsuario = async (req, res) => {
    const id_usuario = req.params.idusuario;
    const prop = await pool.query('DELETE FROM usuario WHERE idusuario = $1', [id_usuario]);
    res.json(`User ${id_usuario} was deleted`);
}

/******************* CRUD ALQUILER **********************/

const getAlquiler= async (req, res) =>{
    const resp = await pool.query('select * from alquiler');
    res.status(200).json(resp.rows);
}

const createAlquiler = async (req, res) => {
    const { idalquiler, fechainicio, fechaentrega, idusuario, fk_iditem } = req.body;
    const resp = await pool.query('INSERT INTO alquiler (idalquiler, fechainicio, fechaentrega, idusuario, fk_iditem) VALUES ($1, $2, $3, $4, $5);', [idalquiler, fechainicio, fechaentrega, idusuario, fk_iditem]);
    res.send('user added succesfully');
}

const updateAlquiler = async (req,res) => {
    const id_alquiler = req.params.idalquiler;
    const {idalquiler, fechainicio, fechaentrega, idusuario, fk_iditem} = req.body;
    const resp = await pool.query('UPDATE alquiler SET idalquiler=$1, fechainicio=$2, fechaentrega=$3, idusuario=$4, fk_iditem=$5 WHERE idalquiler=$6' , [idalquiler, fechainicio, fechaentrega, idusuario, fk_iditem,id_alquiler])
    res.send('Usuario Actualizado')
}

const deleteAlquiler = async (req, res) => {
    const id_alquiler = req.params.idalquiler;
    const prop = await pool.query('DELETE FROM alquiler WHERE idalquiler = $1', [id_alquiler]);
    res.json(`User ${id_alquiler} was deleted`);
}

const getAlquilerDìas= async (req, res) =>{
    const resp = await pool.query('select idusuario, fechaentrega - fechainicio as diff from alquiler;');
    res.status(200).json(resp.rows);
}

/******************* CRUD PELICULA **********************/

const getPelicula= async (req, res) =>{
    const resp = await pool.query('select * from pelicula');
    res.status(200).json(resp.rows);
}

const createPelicula = async (req, res) => {
    const { idpelicula, marcapelicula, nombrepelicula, sensibilidadpelicula, formato, fk_iddispositivo } = req.body;
    const resp = await pool.query('INSERT INTO pelicula (idpelicula, marcapelicula, nombrepelicula, sensibilidadpelicula, formato, fk_iddispositivo) VALUES ($1, $2, $3, $4, $5, $6);', [idpelicula, marcapelicula, nombrepelicula, sensibilidadpelicula, formato, fk_iddispositivo]);
    res.send('user added succesfully');
}

const updatePelicula = async (req,res) => {
    const id_pelicula = req.params.idpelicula;
    const {idpelicula, marcapelicula, nombrepelicula, sensibilidadpelicula, formato, fk_iddispositivo} = req.body;
    const resp = await pool.query('UPDATE pelicula SET idpelicula=$1, marcapelicula=$2, nombrepelicula=$3, sensibilidadpelicula=$4, formato=$5, fk_iddispositivo=$6 WHERE id_pelicula=$7' , [idpelicula, marcapelicula, nombrepelicula, sensibilidadpelicula, formato, fk_iddispositivo, id_pelicula])
    res.send('Usuario Actualizado')
}

const deletePelicula = async (req, res) => {
    const id_pelicula = req.params.idpelicula;
    const prop = await pool.query('DELETE FROM pelicula WHERE idpelicula = $1', [id_pelicula]);
    res.json(`User ${id_pelicula} was deleted`);
}


module.exports = {
    getServicio,
    createServicio,
    updateServicio,
    deleteServicio,
    getMarca,
    createMarca,
    updateMarca,
    deleteMarca,
    getDispositvo,
    updateDispositivo,
    deleteDispositivo,
    createDispositivo,
    createItem,
    updateItem,
    deleteItem,
    getItem,
    createUsuario,
    getUsurario,
    updateUsuario,
    deleteUsuario,
    getAlquiler,
    createAlquiler,
    deleteAlquiler,
    updateAlquiler,
    getPelicula,
    createPelicula,
    deletePelicula,
    updatePelicula,
    getAlquilerDìas

}