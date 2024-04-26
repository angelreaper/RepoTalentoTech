const mongoose = require('mongoose');
require('dotenv').config();

//conexión con mongodb
const conectarDB = () =>{

    mongoose
    .connect(process.env.DB_MONGO)
    .then(()=> console.log('Conexión exitosa'))
    .catch((err)=> console.error(err));
};

module.exports = conectarDB;