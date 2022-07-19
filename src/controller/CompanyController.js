import { addCompany, listCompanies, listCompany } from '../repositories/CompanyRepository.js'

function createCompany(request, response){
    try{
        let { company } = request.body;
        company = addCompany(company)
        return response.status(201).json({date: new Date(), msg: "Company registered!", company: company.getCompany() });
    } catch(error){
        return response.status(400).json(error)
    };
}

function readcompanies(request, response){
    try{
        const companies = listCompanies();
        if (companies.length > 0) return response.status(201).json(companies);
        return response.status(404).json();
    }
    catch(error){
        return response.status(400).json(error)
    }
}

function readcompany(request, response){
    try{
        const query = request.params.id
        const company = listCompany(query)
        if (company) return response.status(201).json(company);
        return response.status(404).json();
    }
    catch(error){
        return response.status(400).json(error)
    }
}

export { createCompany, readcompanies, readcompany }