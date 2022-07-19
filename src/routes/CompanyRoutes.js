import  express  from 'express'
import { createCompany, readcompanies, readcompany } from '../controller/CompanyController.js'

const companyRoutes = express.Router();

companyRoutes.post("/createcompany", createCompany)
companyRoutes.get("/readcompanies", readcompanies)
companyRoutes.get("/readcompany/:id", readcompany)

export { companyRoutes }