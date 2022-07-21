import  express  from 'express'
import { createCompany, readcompanies, readcompany, updatecompany } from '../controller/CompanyController.js'

const companyRoutes = express.Router();

companyRoutes.post("/createcompany", createCompany)
companyRoutes.get("/readcompanies", readcompanies)
companyRoutes.get("/readcompany/:query", readcompany)

companyRoutes.put("/updatecompany/:query", updatecompany)
//companyRoutes.get("/deletecompany/:query", deletecompany)

export { companyRoutes }