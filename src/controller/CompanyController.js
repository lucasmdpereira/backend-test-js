import { addCompany, listCompanies, listCompany, changeCompany } from '../services/CompanyService.js'

function createCompany(request, response){
    try{
        const { company: newCompany } = request.body;
        const company = addCompany(newCompany)
        return response.status(201).json(company);
    } catch(error){
        return response.status(400).json(error)
    };
}

function readcompanies(request, response){
        return listCompanies(response)
}

function readcompany(request, response){
    try{
        const query = request.params.query
        listCompany(query, response)
        return response
    }
    catch(error){
        return response.status(404).json(error)
    }
}

function updatecompany(request, response){
    try{
        let { company: companychanges } = request.body;
        const query = request.params.query
        const company = changeCompany(query, companychanges, response) 
        return response.status(201).json(company)      
    }
    catch(error){
        return response.status(400).json(error)
    }
}

export { createCompany, readcompanies, readcompany, updatecompany }