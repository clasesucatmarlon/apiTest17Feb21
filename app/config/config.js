// Archivo de configuración que retorna un objeto: puerto y base de datos usada 
module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.DB || 'mongodb+srv://marlon:marlon@cluster0.znqfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}