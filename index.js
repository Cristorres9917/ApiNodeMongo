require('dotenv').config();//Importamos y cargamos las variables de entorno desde el archivo .env

const Server=require('./modules/server'); //Importamos la clase Server desde './modules/server'

const server=new Server();//Crea una instancia (objeto) de la clase Server
server.listen();//Inicia el servidor llamado el médtodo listen() de la instancia creada server
