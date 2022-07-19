import  express  from 'express'
import { createCompany } from '../controller/CompanyController.js'

const companyRoutes = express.Router();

companyRoutes.post("/createcompany", createCompany)

export { companyRoutes }