const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db =require('./Connection/mysql_conector');
const contactRoutes = require('./routes/contactRoutes')
app.use(bodyParser.json());

/* habilitamos los cors */

app.use(cors({
    origin:'*',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
}));


db.connect(err=>{
    if(err){
        console.log('Error en la conexion a la base de datos', err);
        return;
    }
    console.log('Conexion establecida correctamente');
});


app.use('/contacts',contactRoutes)
app.listen(3000,()=>{
    
});