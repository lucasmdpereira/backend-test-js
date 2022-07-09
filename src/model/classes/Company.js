class Company{
    name; //string
    cnpj; //number
    adress; //string
    phone; //string
    parkingCarsSpots; //number
    parkingMotocyclesSpots; //number
    statements = []; //object array

    constructor(company){
            this.name = company.name;
            this.cnpj = company.cnpj;
            this.adress = company.adress;
            this.phone = company.phone;
            this.parkingCarsSpots = company.parkingCarsSpots;
            this.parkingMotocyclesSpots = company.parkingMotocyclesSpots;
            
            this.statements.push(new Date() + ": Company registered!");
    }
}

module.exports = Company;