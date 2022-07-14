class Company{
    companyID; //string
    name; //string
    cnpj; //number
    adress; //string
    phone; //string
    parkedCars = 0; //number
    parkedMotocycles = 0; //number
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
    
        getCompany(){
            const company = {
                name: this.name,
                adress: this.adress,
                cnpj: this.cnpj,
                phone: this.phone,
                parkingCarsSpots: this.parkingCarsSpots,
                parkingMotocyclesSpots: this.parkingMotocyclesSpots,
            }
            return company
        }

            setParkedCars(parkedCars){
                this.parkedCars = parkedCars;
            }
    
            setStatements(statement){
                this.statements.push({date: new Date(), msg: statement});
            }

            getParkedCars(){
                return this.parkedCars;
            }

            getParkingCarsSpots(){
                return this.parkingCarsSpots;
            }

            getStatement(){
                return this.statements[this.statements.length];
            }
}

export { Company }