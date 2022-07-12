import { Vehicle } from '../classes/Vehicle.js'

let vehicles = [];

function createVehicle(addvehicle){
    const vehicle = new Vehicle(addvehicle);
    vehicles.push(vehicle)
    return //vehicle.getVehicle() 
}

function readVehicles(){
    return vehicles;
}

export { vehicles, createVehicle, readVehicles } 