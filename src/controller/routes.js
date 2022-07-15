import express from 'express';
import { addCompany, listCompanies } from '../model/methods/company.js'
import { addVehicle, readVehicles, vehicleIn } from '../model/methods/vehicle.js'
import { vehicleOut } from '../model/methods/parking_control.js'

const routes = express.Router();

routes.get("/", (request, response) => {
    return response.status(201).json({Hello: "World"})
});

routes.post("/addcompany", (request, response) => {
    const company = addCompany(request);
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

routes.post("/vehicleIn", async (request, response) =>  {
    const vehicleInResponse = await vehicleIn(request);
    return response.status(201).json(vehicleInResponse)
})
routes.post("/vehicleOut", (request, response) => {
    const vehicleOutResponse = vehicleOut(request);
    return response.status(201).json(vehicleOutResponse)
})

export { routes };
