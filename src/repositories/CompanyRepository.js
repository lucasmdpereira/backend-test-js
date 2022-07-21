import { dataBase } from '../models/createDatabase.js';
import { companyTable } from '../models/createTable.js'
import { Op } from 'sequelize';



async function addCompanyInDb(company){

    const data = await dataBase.sync();
    const table = await companyTable.create({
        companyID: company.companyID,
        name: company.name,
        cnpj: company.cnpj,
        adress: company.adress,
        phone: company.phone,
        parkedCars: 0,
        parkedMotorcycles: 0,
        parkingCarsSpots: 10,
        parkingMotorcyclesSpots: company.parkingMotorcyclesSpots,
        statements: JSON.stringify(company.statements),
    })

    return company
}

async function listCompaniesInDb(response){
    try{
        let listcompanies = await companyTable.findAll()
        let companies = []
        for(let i = 0; i < listcompanies.length; i++){
            companies[i] = listcompanies[i].dataValues
            companies[i].statements = JSON.parse(listcompanies[i].statements)
        }
        return response.status(201).json(companies)
    }
    catch(error){
        return response.status(404).json(error)
    }
}

async function searchCompanyInDb(query, response){

        let company = await companyTable.findAll({
            where: {
                [Op.or]:[
                    { name: `${query}` },
                    { cnpj: `${query}` },
                    { phone: `${query}` },
                    { companyId: `${query}` }
                ]
            }
        })

        if (company.length == 0) return response.status(404).json()

        company[0].statements = JSON.parse(company[0].statements)
        return response.status(201).json(company[0])

}

function changeCompanyInDb(companyID, companychanges, response){
    /*
    for (let i = 0; i < companies.length; i++){
        if (companies[i].companyID == companyID){
            setCompany
        }
    }
    if (response.company){
        
        console.log(companies[0].companyID)

    }
    */
}

export { addCompanyInDb, listCompaniesInDb, searchCompanyInDb, changeCompanyInDb }