const usuario = require ('../modules/usuario')
// Importa la libreria bcryots para le cifrado y comparacon de contraeñas
const bcrypt = require('bcrypts')

//Función asincronica para comparar la contraseña proporcionada con el hash almacenado en la base datos

async function comparePassword(plaintextPassword, hash){
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

//Funciond e inicio de sesion
const login= async (req, res) =>{
    const {email, password}= req.body //Extrae el email y la contraseña del cuerpo de la slicitud 


//buscar un usuario en la bd que tenga esa coincidencia
const usuario = await Usuario.findOne({email})
try{
    //Veriicar que el usuario exista en la base de datos
    if(!usuario){
        return res.status(400).json({msg: 'Correo electrónico no encontrado'})
    }
    if(!usuario.estado){
        return res.status(400).json({msg: 'Usuario inactivo'})
    }

    //Comparación de la contraseña

    resultado = await comparePassword(password, usuario.password)
    if(resultado=true){
        return res.status(400).json({msg: 'Password es correcto'})

    }
    else{
        return res.status(400).json({msg: 'El password es incorrecto'})
    }
}
catch(error){
    return res.status(400).json({msg: 'Apreciado usuario contacte al administrador'})
    //Mensaje de error en caso de que fallo
    }
}
//Exporta la funion de inicio 
module.exports={login} 
