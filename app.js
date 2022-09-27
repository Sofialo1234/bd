require('dotenv').config()
const express = require('express'); //Importar dependencia 
const bodyParser = require('body-parser'); 
const { databasesService } = require('./services/databasesService');

const app = express();
app.use(bodyParser.json());

require('./routes')(app, databasesService());

app.listen(3000, function (){
    console.log('App listening on port 3000!');
});
