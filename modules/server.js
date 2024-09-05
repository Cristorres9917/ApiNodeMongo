//Importar la libreria express para crear el ssevidor web
const express=require('express');

//Importamos la fundion de conexion a la base de datos
const {dbConnection}=require('../database/config')

//Importar la libreria  CORS para permitir las peticiones desde otros dominios 
const cors=require('cors');
//Importar body-parer para guardar datos del cuerpo de la peticiones HTTP
const bodyParser=require('body-parser');

class Server{
        constructor(){
            this.app=express();//Inicializamos la aplicacion
            this.port=express.env.PORT;//obiene el puerto de conexion
            //de las variables de entorno
            this.usuariosPath='api/usuarios'//Definimos la ruta base para las operaciones relaicionadas con los usuarios
            this.authPath='api/auth'//Definimos la ruta base para las operaciones de autenticación
            this.middlewares();//Configurar los middleware de la aplicación
            this.routes();//Configura las rutas de la aplicación 
            this.connectionDb();//Inicializa la cadnna de conexion con la BD
            //Conecta con la base de datos MongoDB
        }
        listen(){
            this.app.listen(this.port, ()=>{
                console.log(`Escuchando por el puerto ${this.port}`)
                //Inicia el servior y muestra un mensaje en consola
            })
        }
        middlewares(){
            //Configurar las CORS para permitir peticiones desde otros dominios
            this.app.use(cors());
            //Configurar el body-parser para parsear los datos del cuerpo de las peticiones HTTP
            this.app.use(bodyParser.json());//para parsear application/json
            //configurar express express.static para poder servir o trabajar ocn archivos estatidcos
            this.app.use(express.static(__dirname+"/public"));
        }
        routes(){
            //configurar las rutas d ela aplicación
            this.app.use(this.usuariosPath, require('../routes/usuarios'))
            //Definir la ruta par alas  operaciones de autenticacion
            this.app.use(this.authPath, require('../routes/auth'))
        }
        async connectionDb(){
            //Conecta con la base de datos de mongoDB al inicio del servidor
            await dbConnection();
        }
}
//Exporto la clase Server par aque este disponible para otros modulos
module.exports=Server;