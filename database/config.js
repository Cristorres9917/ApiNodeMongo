//Importa la libreria mongoose para nteractuar con MongoDB
const mongoose=require('mongoose');
//Funcion para establecer la conexion con la base de datos
const dbConnection=()=>{
    try{
        //Intenta conectar con la base de datos utilizando la URL proporcionada en la variable de entorno MONGODB_CNN
        mongoose.connect(process.env.MONGODB_CNN);
        //Muestra un mensaje por consola indicando que la conexión se ha estableido correctamente
        console.log('Datos en linea')
    }

    catch(error){
        //Muestra el error por consola cuando la conexion falla
        console.log(error)
        //Lanza una exepcion con el mensaje de error
    throw new Error("Error al conectarse con la base de datos");
    }
}

module.exports={dbConnection} 