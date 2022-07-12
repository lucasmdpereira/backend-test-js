import { companies } from '../methods/company.js';
import { vehicles } from '../methods/vehicle.js';

function vehicleIn(licence,companyName){
    const company = companies.find(company => company.name == companyName);
    const vehicle = vehicles.find(vehicle => vehicle.licence == licence);

    

}

export { vehicleIn }