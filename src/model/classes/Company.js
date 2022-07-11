class Company{
    companyID; //string
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
            
            this.statements.push({date: new Date(), msg: "Company registered!"});
    }

    setCompany(company){
        this.name = company.name;
        this.adress = company.adress;
        this.cnpj = company.cnpj;;
        this.phone = company.phone;
        this.parkingCarsSpots = company.parkingCarsSpots;
        this.parkingMotocyclesSpots = company.parkingMotocyclesSpots;
    }

    setStatements(statement){
        this.statements.push(statement);
    }

    getCompany(){
        const company = {
            name: this.name,
            adress: this.adress,
            cnpj: this.cnpj,
            phone: this.phone,
            parkingCarsSpots: this.parkingCarsSpots,
            parkingMotocyclesSpots: this.parkingMotocyclesSpots,
        }
    }

    getStatement(){
        return this.statements[this.statements.length];
    }

}

export { Company }