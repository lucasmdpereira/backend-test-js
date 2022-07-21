import { addCompanyInDb, listCompaniesInDb, searchCompanyInDb, changeCompanyInDb } from '../repositories/CompanyRepository.js'
import { Company } from '../services/classes/CompanyClass.js'

function addCompany(newCompany){
        const company = new Company(newCompany);
        addCompanyInDb(company);
        return company
}

async function listCompanies(response){
        return await listCompaniesInDb(response);
}

async function listCompany(query, response){
        return await searchCompanyInDb(query, response)
}

function changeCompany(query, companychanges, response){
        changeCompanyInDb(query, companychanges, response)
}

export { addCompany, listCompanies, listCompany, changeCompany }