//quede en el 22/03/2024
const express = require('express');
const conectarDB = require('../config/db.js');
const cors = require('cors');


const app = express();

// enlazamos conexión con base de datos
conectarDB();
app.use(cors());


app.use(express.json());

app.use('/api/clientes',require('../routes/rutas'));

app.get('/',(req,res)=>{
    res.send('Hola mundo');
})

// configuración para producción
const port = process.env.PORT ||  3000;

app.listen(port,()=>{
    console.log('El servidor esta conectado http://localhost:3000/');
});