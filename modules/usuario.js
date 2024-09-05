const {schema, model} = required('mongoose'); //Importa las funciones schema y model 



const UsuarioSchema=Schema({
    nombre:{
        type:String,
        required: [true,'El nombre es obigatorio']//Define el campo nombre obligatorio
    },
    email:{
        type:String,
        required: [true,'El email es obigatorio']//Define el campo email obligatorio
    },
    password:{
        type:String,
        required:[true, 'El password es obligatorio'],//Define el campo email obligatorio
        minLenght:3,//Define la longitud minima del campo password
        maxLenght:[60, 'El password debe tener una longitud maxima de 60 cáracteres'],
    },
    rol:{
        type:String,
        required:[true, 'El Rol es obligatorio'],//Define el campo rol obligatorio
        enum:['Admin', 'Usuario']//Solo puede tener valores Admin Usuario
    },
    estado:{
        type:Boolean,
        default:true,
        required:[true, 'El estado es obligatorio'],//Define el campo estado obligatorio
    }

});

//Crea y exporta e modelo de usuario a partir del esquema UsuarioSchema
module.exports=model('Usuario', 'UsuarioSchema');