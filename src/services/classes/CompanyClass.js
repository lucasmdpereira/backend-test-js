import { randomUUID } from 'crypto'

class Company{
    companyID = randomUUID(); //string
    name; //string
    cnpj; //number
    adress; //string
    phone; //string
    parkedCars = 0; //number
    parkedMotorcycles = 0; //number
    parkingCarsSpots; //number
    parkingMotorcyclesSpots; //number
    statements = []; //object array

    constructor(company){
            this.name = company.name;
            this.cnpj = company.cnpj;
            this.adress = company.adress;
            this.phone = company.phone;
            this.parkingCarsSpots = company.parkingCarsSpots;
            this.parkingMotorcyclesSpots = company.parkingMotorcyclesSpots;
            
            this.statements.push({date: new Date(), msg: "Company registered!"});
    }

        setCompany(company){
            this.companyID = company.companyID;
            this.name = company.name;
            this.adress = company.adress;
            this.cnpj = company.cnpj;;
            this.phone = company.phone;
            this.parkingCarsSpots = company.parkingCarsSpots;
            this.parkingMotorcyclesSpots = company.parkingMotorcyclesSpots;
        }
    
        getCompany(){
            const company = {
                companyID: this.companyID,
                name: this.name,
                adress: this.adress,
                cnpj: this.cnpj,
                phone: this.phone,
                parkingCarsSpots: this.parkingCarsSpots,
                parkingMotorcyclesSpots: this.parkingMotorcyclesSpots,
            }
            return company
        }

            setParkedCars(parkedCars){
                this.parkedCars = parkedCars;
            }

            setParkedMotorcycles(parkedMotorcycles){
                this.parkedMotorcycles = parkedMotorcycles;
            }
    
            setStatements(statement){
                this.statements.push({date: new Date(), msg: statement});
            }

            getParkedCars(){
                return this.parkedCars;
            }

            getParkedMotorcycles(){
                return this.parkedMotorcycles;
            }

            getParkingCarsSpots(){
                return this.parkingCarsSpots;
            }

            getParkingMotorcyclesSpots(){
                return this.parkingMotorcyclesSpots;
            }

            getStatement(){
                return this.statements[this.statements.length];
            }
}

export { Company }