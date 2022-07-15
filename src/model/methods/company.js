import { Company } from '../classes/Company.js'
import { companies } from '../services/services.js'

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


