class Vehicle {
    vehicleID; //string
    licence; //string
    type; //string
    brand; //string
    model; //string
    color; //string
    statements = []; //object array
    
    constructor(vehicle) {
        this.licence = vehicle.licence;
        this.type = vehicle.type;
        this.brand = vehicle.brand;
        this.model = vehicle.model;
        this.color = vehicle.color;

        this.statements.push({date: new Date(), msg: "Vehicle registered!"});
        }

        getVehicle(){
            const vehicle = {
                licence: this.licence,
                type: this.type,
                brand: this.brand,
                model: this.model,
                color: this.color,
                statements: this.statements,
            }
            return vehicle
        }
}

export { Vehicle }