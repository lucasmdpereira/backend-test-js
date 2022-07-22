import { dataBase } from '../models/createDatabase.js';
import { companyTable } from '../models/createTable.js'
import { Op } from 'sequelize';



async function addCompanyInDb(company, response){

    try{
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
        return response.status(201).json(company)
    }catch(error){
        return response.status(409).json("Company already registered!")
    }

}

async function listCompaniesInDb(response){
    try{
        let listcompanies = await companyTable.findAll()
        let companies = []
        for(let i = 0; i < listcompanies.length; i++){
            companies[i] = listcompanies[i].dataValues
            companies[i].statements = JSON.parse(listcompanies[i].statements)
        }
        return response.status(302).json(companies)
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

        company[0].statements = JSON.parse(company[0].statements);
        response.company = company[0].dataValues;
        return response.status(302).json(response.company)

}

async function changeCompanyInDb(companyID, companychanges, response){
  
    try{
        let company = await companyTable.findByPk(companyID);

        let statements = JSON.parse(company.dataValues.statements)
        statements.push({date: new Date(), msg: "Company register changed!"});
        
        company.set({
            name: companychanges.name,
            cnpj: companychanges.cnpj,
            adress: companychanges.adress,
            phone: companychanges.phone,
            parkingCarsSpots: companychanges.parkingCarsSpots,
            parkingMotorcyclesSpots: companychanges.parkingMotorcyclesSpots,
            statements: JSON.stringify(statements),
        })
        await company.save();
        company = await companyTable.findByPk(companyID);
        return response.status(302).json(company.dataValues)
    }
    catch(error){
        return response.status(400).json()
    }





}

export { addCompanyInDb, listCompaniesInDb, searchCompanyInDb, changeCompanyInDb }