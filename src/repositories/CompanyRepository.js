import { Company } from '../services/classes/CompanyClass.js'

let companies = [];

function addCompany(newCompany){
    const company = new Company(newCompany);
    companies.push(company)

    return company
}

function findCompanyInDataBase(request){
    const { companyName } = request.body;
    const company = companies.find(company => company.name == companyName);

    return company
}

export { addCompany, findCompanyInDataBase }