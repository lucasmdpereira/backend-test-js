import {
    expect,
    test,
    describe
} from '@jest/globals'
import superTest from 'supertest'
import {app} from '../../src/server.js'

const company = {
    "company": {
        "companyID": "IdTest",
        "name": "nameTest",
        "cnpj": 11111111111,
        "adress": "adressTest",
        "phone": 11111111111,
        "parkingCarsSpots": 10,
        "parkingMotocyclesSpots": 10
        }
}

describe('Create a company test', () => {
    test('POST /addcompany - should return "Empresa cadastrada"', async () =>{
        const response = await superTest(app)
        .post('/addcompany').send(company)
        const data = JSON.parse(response.text)
        expect(data.msg).toBe("Empresa cadastrada")
    })
    test('GET /listcompanies - should return a array of objects', async () =>{
        const response = await superTest(app)
        .get('/listcompanies')
        const data = JSON.parse(response.text)
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toBeGreaterThan(0)
    })
})