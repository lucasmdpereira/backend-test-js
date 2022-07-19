import express from 'express';
import { companyRoutes } from './routes/CompanyRoutes.js';
//import { vehicleRoutes } from './routes/VehicleRoutes.js';

const routes = express.Router();

routes.get("/", (request, response) => {
    return response.status(201).json({Hello: "World"})
});

routes.use(companyRoutes)

export { routes }