import { Company } from '../classes/Company.js'
import { vehicles } from '../methods/vehicle.js'

let companies = [];

function addCompany(request){
        const { company: addcompany } = request.body;
        const company = new Company(addcompany);
        companies.push(company)
        return company.getCompany() 
}

function listCompanies(){
        return companies;
}

export { companies, addCompany, listCompanies } 


