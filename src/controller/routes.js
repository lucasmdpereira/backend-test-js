import express from 'express';
import { createCompany, readCompanies } from '../model/methods/company.js'

const routes = express.Router();


routes.get("/", (request, response) => {
    return response.status(201).json({Hello: "World"})
});

//Add company
routes.post("/addcompany", (request, response) => {
    const { company: addcompany } = request.body;
    createCompany(addcompany);
    return response.status(201).json({date: new Date(), msg: "Empresa criada"});
})

//List all company
routes.get("/listcompanies", (request, response) => {
    const companies = readCompanies();
    return response.status(201).json(companies);
})

export { routes };
