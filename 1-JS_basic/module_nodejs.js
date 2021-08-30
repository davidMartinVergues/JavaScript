const hello2 = (nombre)=>{
    return `Hello, ${nombre}!`;
}

const nombre = "David"

//module.exports.saludo = hello2
//module.exports.nombre = nombre

module.exports = {
    saludo: hello2,
    nombre: nombre
}