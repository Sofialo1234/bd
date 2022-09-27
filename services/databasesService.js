const databasesService = () => {

    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
    });

    const tabla = "administrador"    
    const crearLenguaje = ({Rut, contraseña }) => {

        return knex(tabla).insert({
            Rut:Rut,
            contraseña: contraseña
        }); // retorna una promesa 
    };

    const leerAdmin = () => {
        return knex(tabla).select()
    }

    return{
        crearLenguaje, leerAdmin
    }
};

module.exports = {
    databasesService
};