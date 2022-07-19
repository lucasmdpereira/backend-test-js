import { addCompany } from '../repositories/CompanyRepository.js'

function createCompany(request, response){
    try{
        let { company } = request.body;
        company = addCompany(company)
        return response.status(201).json({date: new Date(), msg: "Company registered!", company: company.getCompany() });
    } catch(error){
        return response.status(400).json(error)
    };
}

export { createCompany }