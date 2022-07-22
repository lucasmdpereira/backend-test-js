import  express  from 'express'
import { createCompany, readcompanies, readcompany, updatecompany, deletecompany } from '../controller/CompanyController.js'

const companyRoutes = express.Router();

companyRoutes.post("/createcompany", createCompany)
companyRoutes.get("/readcompanies", readcompanies)
companyRoutes.get("/readcompany/:query", readcompany)

companyRoutes.put("/updatecompany/:query", updatecompany)
companyRoutes.delete("/deletecompany/:query", deletecompany)

export { companyRoutes }