//Importamos la funcion response desde el módulo express
const {response} = require('express')

// Importa la libreria bcryots para le cifrado y comparacon de contraeñas
const bcrypt = require('bcrypts')

//Importar modelos
//Importar el modelo de usuario desde el modulo
const Usuario = require ('../modules/usuario')

//Controlador para la solicitud GET a la ruta de usuarios

const usuarioGet=async(req, res=response)=>{
    const body=req.query;//Extraer los parámetros de la consulta 
    const{q, nombre, page=1, limit}= req.query;
    //consulta todos los documentos de la colección de la base de datos Usuarios
    const usuarios=await Usuario.find();

    res.json({ 
        //Devolver un objeto JSON con los usuarios obtenids de la BD
        usuarios 
    });
}
//controlador para la solicitud GET de promedio de usuarios
const PromGet=async(req, res=response)=>{
    const body=req.query;//Extraer los parámetros de la consulta 
    const{q, nombre, page=1, limit}= req.query;
    //consulta todos los documentos de la colección de la base de datos Usuarios
    const usuarios=await Usuario.find();
    //muestra cada documento de usuario por consola
    usuarios.forEach(numero => console.log(numero));

    res.json({
        msg: 'Prom API controlador',
        q,
        nombre,
        page,
        limit,
        //Devuelve los usuarios obtenudis de ka base de datos 
        usuarios

    });
}

//Controlador para la solicitud POST a la ruta de usuarios

const usuarioPost=async(req, res=response)=>{
    const body=req.query;//Extraer los parámetros de la consulta 
    let msg='';//Inicializamos una variable para el mensaje de respuesta
    //Creamos un nuevo objeto usuario con los datos 
    const usuario=new Usuario(body);
    //Extrae los datos del cuerpo de la solicitud
    const {nombre, email, password, rol, estado}=req.body;
    try{
        //Encriptar la contraseña antes de guardarla en la base de datos
        const salt=bcrypt.genSaltSync(10);// función para generar una cadena de cifrado
        usuario.password=bcrypt.hashSync(password, salt)

        
        await usuario.save()//Guarda la función en la base de datos

        msg='Usuario registrado';
    }
    catch(error){
        console.log(error);//Muestra el error por consola
        if(error){
            if(error.name==='ValidationError'){
                console.log(Object.values(error.errors).map(val=> val.message));
                    //Muestra los mensajes d evalidacion
                    msg=Object.values(error.errors).map(val=>
                        val.message)
                        //Asigna el mensahe de error a los errores de respuesta
                
            }
        }
    }
    console.log(msg);//Muestra el mensajede repuesta por consola 

     res.json({
        msg:msg

    });
}

const usuarioPut=async (req, res=response)=>{
    const body=req.query;//Extraer los parámetros de la consulta 
    //Muestra los parametros de consulta por consola
    console.log(body);
     //Extrae los datos del cuerpo de la solicitud
     const {nombre, email, password, rol, estado}=req.body;

     //Busca y actualiza un usuario en la base de datos
     const usuario=await Usuario.findOneAndUpdate({email: email},{nombre:nombre},{rol:rol});

     res.json({
        //devuelve un mensaje indicando que se actualizo el usuario
        msg:'Usuario modificado',

        usuario //devuelve el usuario modificado
     })
}

const usuarioDelete=async (req, res=response)=>{
    const body=req.query;//Extraer los parámetros de la consulta 
    //Muestra los parametros de consulta por consola
    console.log(body);
    //Extrae los datos del cuerpo de la solicitud
    const {nombre, email, password, rol, estado}=req.body;

    //Busca y elimina un usuario en la base de datos
    const usuario=await Usuario.findOneAndDelete({email: email});

    res.json({
        //devuelve un mensaje indicando que se actualizo el usuario
        msg:'Usuario eliminado',

        usuario //devuelve el usuario modificado
     });
}

//Exporta los controladores de las rutas de usuarios para que estén disponilbles para otros archivos o modulos
module.exports={usuarioGet, PromGet, usuarioPost, usuarioPut, usuarioDelete} 



