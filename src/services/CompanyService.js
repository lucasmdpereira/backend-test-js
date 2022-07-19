import { Company } from './classes/CompanyClass.js'
import { companies } from '../repositories/services.js'

function addCompany(request, response){
        const { company: addcompany } = request.body;
        const company = new Company(addcompany);
        companies.push(company)
        return response.status(201).json({date: new Date(), msg: "Company registered!", company: company.getCompany() });
}

function listCompanies(){
        return companies;
}

export { companies, addCompany, listCompanies } 


