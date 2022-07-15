import { companies } from '../methods/company.js';
import { vehicles } from '../methods/vehicle.js';



function vehicleOut(request){
        const { licence, companyName } = request.body;
    const company = companies.find(company => company.name == companyName);
    const vehicle = vehicles.find(vehicle => vehicle.licence == licence);
    let parkedCars = company.getParkedCars()          
            parkedCars--;
            const statement = `The ${vehicle.brand} ${vehicle.model} ${vehicle.color} with a licence ${vehicle.licence} has out`
            company.setStatements(statement)

            
            return statement
}

export { vehicleOut }