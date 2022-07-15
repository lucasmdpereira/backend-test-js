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

    if(leftSpots > 0){
        const statementCompany = `The ${vehicle.brand} ${vehicle.model} ${vehicle.color} with a licence ${vehicle.licence} has in`; //substituir por métodos: getbrand(), getmodel(), getcolor()
        const statementVehicle = `Entered ${company.name} at ${company.adress}` //substituir por métodos: getbrand(), getmodel(), getcolor()
        company.setStatements(statementCompany);
        vehicle.setStatements(statementVehicle);
        return `${statementCompany}. We have ${--leftSpots} left spots`
    } else {
        return `Sorry. We have no left spots`
    }
}
function carIn(company){
    const parkingCarsSpots = company.getParkingCarsSpots()
    let parkedCars = company.getParkedCars()
    let leftSpots = parkingCarsSpots - parkedCars

    if ( leftSpots > 0){
        company.setParkedCars(++parkedCars)
        return leftSpots
    }
}
function motoIn(company){
    const parkingMotorcyclesSpots = company.getParkingMotorcyclesSpots()
    let parkedMotorcycles = company.getParkedMotorcycles()
    let leftSpots = parkingMotorcyclesSpots - parkedMotorcycles

    if ( leftSpots > 0){
        company.setParkedMotorcycles(++parkedMotorcycles)
        return leftSpots
    }
}

function vehicleOut(request){
    const company = findCompanyInDataBase(request);
    const vehicle = findVehicleInDataBase(request);

    switch(vehicle.type){
        case 'car':
            company.parkedCars--
            break;
        case 'motorcycle':
            company.parkedMotorcycles--
            break;
        default:
                // error
            break;
    }

    const statementCompany = `The ${vehicle.brand} ${vehicle.model} ${vehicle.color} with a licence ${vehicle.licence} has out`
    const statementVehicle = `Left ${company.name} at ${company.adress}` //substituir por métodos: getbrand(), getmodel(), getcolor()


    company.setStatements(statementCompany);
    vehicle.setStatements(statementVehicle);
      
}



export { vehicles, addVehicle, readVehicles, vehicleIn, vehicleOut } 