import { addCompanyInDb, listCompaniesInDb, searchCompanyInDb, changeCompanyInDb, eraseCompanyInDb } from '../repositories/CompanyRepository.js'
import { Company } from '../services/classes/CompanyClass.js'

function addCompany(newCompany, response){
        const company = new Company(newCompany);  
        return addCompanyInDb(company, response);
}

function listCompanies(response){
        return listCompaniesInDb(response);
}

function listCompany(query, response){
        return searchCompanyInDb(query, response)
}

async function changeCompany(query, companychanges, response){
        try{
                await listCompany(query, response)
                const companyID = response.company.companyID
                return await changeCompanyInDb(companyID, companychanges, response)
        }catch(error){
                return response.status(400).json()
        }
}

async function eraseCompany(query, response){
        try{
                await listCompany(query, response)
                const companyID = response.company.companyID
                return await eraseCompanyInDb(companyID)
        }catch(error){
                return response.status(400).json()
        }
}

export { addCompany, listCompanies, listCompany, changeCompany, eraseCompany }