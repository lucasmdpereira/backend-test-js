import { Company } from '../classes/Company.js'

let companies = [];

function createCompany(addcompany){
        const company = new Company(addcompany);
        companies.push(company)
        return company.getCompany() 
}

function readCompanies(){
        return companies;
}

function vehicleIn(){
        
}

export { companies, createCompany, readCompanies } 


