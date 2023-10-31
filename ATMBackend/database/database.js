import { Sequelize } from "sequelize";

//ORM -> Object Relational Mapping

let tabla = "tabla_usuarios";

const conexion = new Sequelize(
    'ATM',
    'nestor',
    '1234',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

export default conexion;