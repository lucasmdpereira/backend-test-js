import express from 'express';
import { addCompany, listCompanies } from '../model/methods/company.js'
import { addVehicle, readVehicles } from '../model/methods/vehicle.js'
import { vehicleIn, vehicleOut } from '../model/methods/parking_control.js'
//import { vehicleIn } from '../model/methods/parking_control.js'

const routes = express.Router();

routes.get("/", (request, response) => {
    return response.status(201).json({Hello: "World"})
});

routes.post("/addcompany", (request, response) => {
    const company = addCompany(request)
    return response.status(201).json({date: new Date(), msg: "Company registered!", company: company});
})
routes.get("/listcompanies", (request, response) => {
    const companies = listCompanies();
    return response.status(201).json(companies);
})

routes.post("/addVehicle", (request, response) => {
    const vehicle = addVehicle(request);
    return response.status(201).json({date: new Date(), msg: "Vehicle registered!", vehicle:  vehicle});
})
routes.get("/listvehicles", (request, response) => {
    const vehicles = readVehicles();
    return response.status(201).json(vehicles);
})

//vehicle entry
routes.post("/vehicleIn", (request, response) => {
    const vehicleInResponse = vehicleIn(request)
    return response.status(201).json(vehicleInResponse)
})

routes.post("/vehicleOut", (request, response) => {
    const { licence, companyName } = request.body;
    const vehicleOutResponse = vehicleOut(licence,companyName)
    return response.status(201).json(vehicleOutResponse)
})


export { routes };
