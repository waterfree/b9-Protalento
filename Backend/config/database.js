import { Sequelize } from "sequelize";
const conexion = new Sequelize(
    //aqui va el nombre de la base
    'fruber',
    //usuario de la base de datos
    'postgres',
    //contraseña de la bd
    '1234',
    {
        //el servidor donde esta alojada la bd con puerto de la bd
        host: 'localhost',
        puerto: 5432,
        dialect: 'postgres'
    }
);

export default conexion;