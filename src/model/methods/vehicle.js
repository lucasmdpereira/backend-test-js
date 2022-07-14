import { Vehicle } from '../classes/Vehicle.js'

let vehicles = [];

function addVehicle(request){
    const { vehicle: addvehicle} = request.body;
    const vehicle = new Vehicle(addvehicle);
    vehicles.push(vehicle)
    return vehicle.getVehicle() 
}

function readVehicles(){
    return vehicles;
}

export { vehicles, addVehicle, readVehicles } 