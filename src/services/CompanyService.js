import { addCompanyInDb, listCompaniesInDb, searchCompanyInDb, changeCompanyInDb } from '../repositories/CompanyRepository.js'
import { Company } from '../services/classes/CompanyClass.js'

function addCompany(company){
        const newCompany = new Company(company);
        addCompanyInDb(newCompany);
        return newCompany
}

async function listCompanies(response){
        return await listCompaniesInDb(response);
}

function listCompany(query, response){
        return searchCompanyInDb(query, response)
}

function changeCompany(query, companychanges, response){
        changeCompanyInDb(query, companychanges, response)
}

export { addCompany, listCompanies, listCompany, changeCompany }