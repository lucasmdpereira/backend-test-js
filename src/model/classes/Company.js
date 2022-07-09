class Company{
    name;
    cnpj;
    adress;
    phone;
    parkingCarsSpots;
    parkingMotocyclesSpots;
    statements = [];

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