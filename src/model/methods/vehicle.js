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

async function vehicleIn(request){
    const company = findCompanyInDataBase(request);
    const vehicle = findVehicleInDataBase(request);

    let leftSpots;
    switch(vehicle.type){
        case 'car':
            leftSpots = await carIn(company);
            break;
        case 'motorcycle':
            leftSpots = await motoIn(company);
            break;
        default:
                // error
            break;
    }

    if(leftSpots){
        const statementCompany = `The ${vehicle.brand} ${vehicle.model} ${vehicle.color} with a licence ${vehicle.licence} has in`; //substituir por métodos: getbrand(), getmodel(), getcolor()
        const statementVehicle = `Entered ${company.name} at ${company.adress}` //substituir por métodos: getbrand(), getmodel(), getcolor()
        company.setStatements(statementCompany);
        vehicle.setStatements(statementVehicle);
        return `${statementCompany}. We have ${leftSpots} left spots`
    }

            
    //return vehicleInResponse;
}

function carIn(company){
    const parkingCarsSpots = company.getParkingCarsSpots()
    let parkedCars = company.getParkedCars()
    let leftSpots = parkingCarsSpots - parkedCars

    if ( leftSpots > 0){
        company.setParkedCars(++parkedCars)

        return --leftSpots
    }
}

function motoIn(company){
    const parkingMotorcyclesSpots = company.getParkingMotorcyclesSpots()
    let parkedMotorcycles = company.getParkedMotorcycles()
    let leftSpots = parkingMotorcyclesSpots - parkedMotorcycles

    if ( leftSpots > 0){
        company.setParkedMotorcycles(++parkedMotorcycles)

        return --leftSpots
    } else {
        // sem vagas
    }
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



export { vehicles, addVehicle, readVehicles, vehicleIn } 