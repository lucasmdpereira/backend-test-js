import { Company } from '../classes/Company.js'
import { vehicles } from '../methods/vehicle.js'

let companies = [];

function createCompany(addcompany){
        const company = new Company(addcompany);
        companies.push(company)
        return company.getCompany() 
}

function readCompanies(){
        return companies;
}

function vehicleIn(licence, companyName){
        const company = companies.find(company => company.name == companyName);
        const vehicle = vehicles.find(vehicle => vehicle.licence == licence);
        const parkingCarsSpots = company.getParkingCarsSpots()
        let parkedCars = company.getParkedCars()

        let leftSpots = parkingCarsSpots - parkedCars
        
        if (leftSpots > 0){
                parkedCars++;
                company.setParkedCars(parkedCars)

                const statement = `The ${vehicle.brand} ${vehicle.model} ${vehicle.color} with a licence ${vehicle.licence} has in`

                company.setStatements(statement)

                const returnMSG = `${statement}. We have ${parkingCarsSpots-parkedCars} left spots`

                return returnMSG
        } else {
                // sem vagas
        }
}

function vehicleOut(licence, companyName){
        const company = companies.find(company => company.name == companyName);
        const vehicle = vehicles.find(vehicle => vehicle.licence == licence);
        let parkedCars = company.getParkedCars()          
                parkedCars--;
                const statement = `The ${vehicle.brand} ${vehicle.model} ${vehicle.color} with a licence ${vehicle.licence} has out`
                company.setStatements(statement)

                
                return statement
}

export { companies, createCompany, readCompanies, vehicleIn, vehicleOut } 


