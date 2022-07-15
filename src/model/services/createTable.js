import { Sequelize } from 'sequelize'; 
import { dataBase } from './createDatabase.js';

const companyTable = dataBase.define('companies',{
    //company table
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
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

async function create(){
    const resultado = await dataBase.sync();
    const insertData = await companyTable.create({
        id: 0
    })
}

create()