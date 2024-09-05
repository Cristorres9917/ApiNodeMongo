const {Router} = require('express'); //Exporta la función outer de express para crear un router
const router=Router();//Crea una instancia de Router

//Importamos los controladores desde '../controllers/usuario'
const{usuarioGet, usuarioPost, usuarioPut, usuarioDelete, PromGet}=require('../controllers/usuario');

//Definir mas rutas y asignar conroladres a cada ruta 
//Rua para obtener todos los usuarios (GET '/')
router.get('/', usuarioGet);

//Rua para obtener el promedio de los usuarios (GET '/promedio')
router.get('/promedio', PromGet);

//Rua para crear un nuevo usuarios (POST '/')
router.post('/', usuarioPost);

//Rua para actualizar un usuario existente (PUT '/')
router.put('/', usuarioPut);

//Rua para eliminar un usuario existente (DELETE '/')
router.delete('/', usuarioDelete);

//Exporta el router para que este disponibe para otros módulos
module.exports= router;