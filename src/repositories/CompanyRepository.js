import { Company } from '../services/classes/CompanyClass.js'

let companies = [];

function addCompany(newCompany){
    const company = new Company(newCompany);
    companies.push(company)

    return company
}

function listCompanies(){
    return companies
}

function listCompany(query){
        const company = companies.find(company => company.name == query || 
                        company.cnpj == query || company.phone == query);
        return company
}

export { addCompany, listCompanies, listCompany }