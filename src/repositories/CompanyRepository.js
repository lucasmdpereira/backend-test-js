import { Company } from '../services/classes/CompanyClass.js'
import { dataBase } from '../models/createDatabase.js';
import { companyTable } from '../models/createTable.js'
import { Op } from 'sequelize';


let companies = [];

async function addCompanyInDb(company){
    companies.push(company)
    console.log(company.companyID)
    await dataBase.sync();
    await companyTable.create({
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
        console.log(query)
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

        company[0].statements = JSON.parse(company[0].statements)

       // console.log(company[0])

        response.company = company[0];

        if(response.company) return response.status(201).json(response.company)
        return response.status(404).json()
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