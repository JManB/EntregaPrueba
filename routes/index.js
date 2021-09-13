const { Router } = require('express');
const router = Router();

const { getServicio, createServicio, updateServicio, deleteServicio, getMarca, createMarca, updateMarca, deleteMarca, createDispositivo, getDispositvo, updateDispositivo, deleteDispositivo, createItem, getItem, updateItem, deleteItem, createUsuario, getUsurario, updateUsuario, deleteUsuario, createAlquiler, getAlquiler, updateAlquiler, deleteAlquiler, createPelicula, getPelicula, updatePelicula, deletePelicula, getAlquilerDìas } = require('../controllers/controllers.js')

//**Rutas CRUD Servicio */
router.post('/servicio/',createServicio);
router.get('/servicio/',getServicio);
router.put('/servicio/:idservicio',updateServicio);
router.delete('/servicio/:idservicio',deleteServicio);

//**Rutas CRUD Marca */
router.post('/marca/',createMarca);
router.get('/marca/',getMarca);
router.put('/marca/:id_marca',updateMarca);
router.delete('/marca/:id_marca',deleteMarca);

//**Rutas CRUD Dispositivos */

router.post('/dispo/',createDispositivo);
router.get('/dispo/',getDispositvo);
router.put('/dispo/:iddispositivo',updateDispositivo);
router.delete('/dispo/:iddispositivo',deleteDispositivo);

//**Rutas ITEM Dispositivos */

router.post('/item/',createItem);
router.get('/item/',getItem);
router.put('/item/:iditem',updateItem);
router.delete('/item/:iditem',deleteItem);
//**Rutas USUARIO Dispositivos */

router.post('/usuario/',createUsuario);
router.get('/usuario/',getUsurario);
router.put('/usuario/:idusuario',updateUsuario);
router.delete('/usuario/:idusuario',deleteUsuario);

//**Rutas ALQUILER Dispositivos */

router.post('/alquiler/',createAlquiler);
router.get('/alquiler/',getAlquiler);
router.put('/alquiler/:idalquiler',updateAlquiler);
router.delete('/alquiler/:idalquiler',deleteAlquiler);
router.get('/alqui/',getAlquilerDìas);

//**Rutas Peliculas */

router.post('/pelicula/',createPelicula);
router.get('/pelicula/',getPelicula);
router.put('/pelicula/:idpelicula',updatePelicula);
router.delete('/pelicula/:idpelicula',deletePelicula);

module.exports = router;