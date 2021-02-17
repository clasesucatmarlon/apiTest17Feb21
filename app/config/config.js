// Archivo de configuración que retorna un objeto: puerto y base de datos usada 
module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.DB || 'mongodb://localhost:27017/apitest17feb21'
}