//Importamos la funcion response desde el módulo express
const {response} = require('express')
//Controlador para la solicitud GET a la ruta usuairo
usuarioGEt=(req, res=response)=>{
    res.json({
        msg: "GET API"//Devuelve un objeto JSON con un mensaje indicando que se esta accediendo a la API con el metodo GET
    })
}

//Controlador para la solicitud POST a la ruta de usuarios
usuarioPost=(req, res=response)=>{
    res.json({
        msg: "POST API"//Devuelve un objeto JSON con un mensaje indicando que se esta accediendo a la API con el metodo POST
    })
}

//Controlador para la solicitud PUT a la ruta de usuarios
usuarioPut=(req, res=response)=>{
    res.json({
        msg: "PUT API"//Devuelve un objeto JSON con un mensaje indicando que se esta accediendo a la API con el metodo PUT
    })
}

//Controlador para la solicitud DELETE a la ruta de usuarios
usuarioDelete=(req, res=response)=>{
    res.json({
        msg: "DELETE API"//Devuelve un objeto JSON con un mensaje indicando que se esta accediendo a la API con el metodo DELETE
    })
}

module.exports={usuarioGet, usuarioPost, usuarioPut, usuarioDelete}