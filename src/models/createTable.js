import { Sequelize } from 'sequelize'; 
import { dataBase } from './createDatabase.js';

const companyTable = dataBase.define('companies',{
    //company table
    companyID: {
        type: Sequelize.STRING,
        //allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        //allowNull: false,
        unique: true,
    },
    cnpj: {
        type: Sequelize.INTEGER,
        //allowNull: false,
        unique: true,
    },
    adress: {
        type: Sequelize.STRING,
        //allowNull: false,
    },
    phone: {
        type: Sequelize.INTEGER,
        //allowNull: false,
        unique: true,
    },
    parkedCars: {
        type: Sequelize.INTEGER,
        //allowNull: false,
    },
    parkedMotorcycles: {
        type: Sequelize.INTEGER,
        //allowNull: false,
    },
    parkingCarsSpots: {
        type: Sequelize.INTEGER,
        //allowNull: false,
    },
    parkingMotorcyclesSpots: {
        type: Sequelize.INTEGER,
        //allowNull: false,
    },
    statements: {
        type: Sequelize.STRING,
    },
})

const vehicleTable = dataBase.define('vehicle',{
    //company table
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
})



export { companyTable }