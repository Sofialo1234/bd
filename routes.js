const { config } = require("dotenv");
const { response } = require("express");

module.exports = function(app, databaseService){

    //get leer 
    app.get('/', (requesrt, response) => {
        response.json({"mensaje": "Todo bien"});
    });

    app.get('/administrador', (request, response) => {
        databaseService.leerAdmin()
    
        .then((administrador) => {
            response.json(administrador);
        }).catch(e => {

            response.status(500).json(e);
        });
    });
    
    //post para crear 
    app.post('/lenguajes', (request, response) => {

        const nuevolenguaje = request.body;
        console.log(nuevolenguaje);

        databaseService.crearLenguaje(nuevolenguaje)
            .then(() => {
                response.json({"mensaje": "Creadoo"});
            }).catch(e => {

                response.status(500).json(e);
            });

    });

};