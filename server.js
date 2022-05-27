const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
console.log(process.env.SECRET_KEY);
//Connect Mongo Atlas
//require('./server/config/connectMongo')();

require('./server/config/mongoose.config')
 
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json(), express.urlencoded({extended: true}));
//app.use(express.urlencoded({ extended: true }));

require('./server/routes/routes')(app); 

 
app.listen(8080, () => {
    console.log("Servidor Conectado")
})