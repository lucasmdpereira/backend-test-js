class Parking {
    parkingID; //string
    alias; //string
    maxParkingCarsSpots; //number
    maxParkingMotocyclesSpots; //number
    parkedCars; //number
    parkedMotocycles; //number
    statements = [] //object array

    constructor(parking){
        this.alias = parking.alias;
        this.maxParkingCarsSpots = parking.maxParkingCarsSpots;
        this.maxParkingMotocyclesSpots = parking.maxParkingMotocyclesSpots;
        this.parkedCars = parking.parkedCars;
        this.parkedMotocycles = parking.parkedMotocycles;

        this.statements.push(new Date() + `: Parking "${this.alias}" was created with ${this.maxParkingCars} parking spots for cars and ${this.maxParkingMotocycles} parking sports for motocycles`)
    }
}