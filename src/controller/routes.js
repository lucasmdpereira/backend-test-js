import express from 'express';
import { createCompany, readCompanies, vehicleIn, vehicleOut } from '../model/methods/company.js'
import { createVehicle, readVehicles } from '../model/methods/vehicle.js'
//import { vehicleIn } from '../model/methods/parking_control.js'

const routes = express.Router();


routes.get("/", (request, response) => {
    return response.status(201).json({Hello: "World"})
});

//Add company
routes.post("/addcompany", (request, response) => {
    const { company: addcompany } = request.body;
    createCompany(addcompany)
    return response.status(201).json({date: new Date(), msg: "Empresa cadastrada"});
})

//List all company
routes.get("/listcompanies", (request, response) => {
    const companies = readCompanies();
    return response.status(201).json(companies);
})

//Add vehicle
routes.post("/addVehicle", (request, response) => {
    const { vehicle: addvehicle} = request.body;
    createVehicle(addvehicle);
    return response.status(201).json({date: new Date(), msg: "Veículo cadastrado"});
})

//list all vehicles
routes.get("/listvehicles", (request, response) => {
    const vehicles = readVehicles();
    return response.status(201).json(vehicles);
})

//vehicle entry
routes.post("/vehicleIn", (request, response) => {
    const { licence, companyName } = request.body;
    const vehicleInResponse = vehicleIn(licence,companyName)
    return response.status(201).json(vehicleInResponse)
})

routes.post("/vehicleOut", (request, response) => {
    const { licence, companyName } = request.body;
    const vehicleOutResponse = vehicleOut(licence,companyName)
    return response.status(201).json(vehicleOutResponse)
})


export { routes };
