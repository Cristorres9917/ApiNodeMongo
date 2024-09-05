const {Router} = require('express'); //Exporta la función outer de express para crear un router
const router=Router();//Crea una instancia de Router
const {login}=require('../controllers/auth');// Importa el controlador

//Definimos una ruta POST para el '/login' que utilizará el controlador login
router.post('/login', login);
module.exports = router;//Expora el router para que este dsisponible para otros modulos
