// Configuración de la conexión a la base de datos

const mongoose = require('mongoose');
const CONFIG = require('./config');

// connection: null (no hay conexión por el momento)
// connect: método para validar si existe una conexión
module.exports = {
    connection: null,
    connect: function () {
        if (this.connection) {
            return this.connection;
        } else {
            // devuelve una promesa
            return mongoose.connect(CONFIG.DB, {useNewUrlParser: true, useUnifiedTopology: true}).then(connection => {
                this.connection = this.connection;
                console.log("Conexión a la Base de Datos EXITOSA......!!!!!!!!");

            } ).catch(error => console.log(error));
        }
    }
}