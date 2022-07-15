let companies = [];
let vehicles = [];
//Verifica se empresa e veículo estão cadastrados, se o veículo que está saindo
// entrou, etc...

function findVehicleInDataBase(request){
    const { licence } = request.body;
    const vehicle = vehicles.find(vehicle => vehicle.licence == licence);

    return vehicle
}

function findCompanyInDataBase(request){
    const { companyName } = request.body;
    const company = companies.find(company => company.name == companyName);

    return company
}

export { companies, vehicles, findVehicleInDataBase, findCompanyInDataBase }