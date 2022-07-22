import { addCompany, listCompanies, listCompany, changeCompany } from '../services/CompanyService.js'

function createCompany(request, response){
    try{
        const { company: newCompany } = request.body;
        return addCompany(newCompany, response)
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
        const query = request.params.query
        let { company: companychanges } = request.body;      
        return changeCompany(query, companychanges, response) 
    }
    catch(error){
        return response.status(400).json(error)
    }
}

export { createCompany, readcompanies, readcompany, updatecompany }