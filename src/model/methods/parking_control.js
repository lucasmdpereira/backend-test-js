import { companies } from '../methods/company.js';
import { vehicles } from '../methods/vehicle.js';

function vehicleIn(request){
        const { licence, companyName } = request.body;
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

export { vehicleIn, vehicleOut }