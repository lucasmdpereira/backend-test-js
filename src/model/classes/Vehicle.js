class Vehicle {
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

        this.statements.push(new Date() + ": Vehicle registered!")
    }
}