import { Vehicle } from '../classes/Vehicle.js'
import { companies } from '../methods/company.js'
import { vehicles, findCompanyInDataBase, findVehicleInDataBase } from '../services/services.js'


function addVehicle(request){
    const { vehicle: addvehicle} = request.body;
    const vehicle = new Vehicle(addvehicle);
    vehicles.push(vehicle)

    return vehicle.getVehicle() 
}

function readVehicles(){
    return vehicles;
}

function vehicleIn(request){
    const company = findCompanyInDataBase(request);
    const vehicle = findVehicleInDataBase(request);
    
    const parkingCarsSpots = company.getParkingCarsSpots()
    let parkedCars = company.getParkedCars()
    let leftSpots = parkingCarsSpots - parkedCars

    if ( leftSpots > 0){
        const statement = `The ${vehicle.brand} ${vehicle.model} ${vehicle.color} with a licence ${vehicle.licence} has in`
        
        company.setStatements(statement)
        company.setParkedCars(++parkedCars)

        return `${statement}. We have ${--leftSpots} left spots`
} else {
        // sem vagas
}

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

}

export { vehicles, addVehicle, readVehicles, vehicleIn } 