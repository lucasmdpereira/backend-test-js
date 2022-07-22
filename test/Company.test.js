import {
    jest,
    expect,
    test,
    describe
} from '@jest/globals'
import superTest from 'supertest'
import { testServer } from './startTestServer'

const company = {
    "company": {
        "name": "nameTest",
        "cnpj": 12345678901231,
        "adress": "adressTest",
        "phone": 11111111111111,
        "parkingCarsSpots": 1,
        "parkingMotorcyclesSpots": 2,
        }
}


const vehicle = {
    "vehicle": {
        "licence": "placaTest",
        "brand": "brandTest",
        "model": "modelTest",
        "color": "colorTest",
        "type": "car"
        }
}

describe('CRUD - READ => List all companies, but there is no companies', () => {
    test('GET /readcompanies - should return status 404', async () =>{
        const response = await superTest(testServer)
        .get('/readcompanies')
        expect(response.status).toBe(404); 
    })
})

describe('CRUD - CREATE => Create a company', () => {
    test('POST /createcompany - should return status 201', async () =>{
        const response = await superTest(testServer)
        .post('/createcompany').send(company)
        expect(response.status).toBe(201);     
    })    
})

describe('CRUD - READ => List all companies', () => {
    test('GET /readcompanies - should the return status 302 + companies', async () =>{
        
        const response = await superTest(testServer)
        .get('/readcompanies')
        expect(response.body).toBeTruthy();
        expect(response.status).toBe(302);
    })
})

describe('CRUD - READ => List a company', () => {
    test('GET readcompany/nameTest - should return status 302 + company', async () =>{
        const response = await superTest(testServer)
        .get('/readcompany/nameTest')
        expect(response.body).toBeTruthy();
        expect(response.status).toBe(302); 
    })
    test('GET readcompany/invalidQuery - should return status 404"', async () =>{
        const response = await superTest(testServer)
        .get('/readcompany/somethingimpossibletomatch')

        expect(response.status).toBe(404); 
    })
})

describe('CRUD - UPDATE => Update a company', () => {
    test('UPDATE updatecompany/nameTest - should return status 302"', async () => {
        const response = await superTest(testServer)
        .put('/updatecompany/nameTest').send(company)
        expect(response.status).toBe(302); 
    })
    test('UPDATE updatecompany/invalidquery - invalid query should return status 404"', async () => {
        const response = await superTest(testServer)
        .put('/updatecompany/invalidquery').send(company)

        expect(response.status).toBe(404); 
    })
})

describe('CRUD - DELETE => Delete a company', () => {
    test('GET readcompany/nameTest - should return status 302', async () => {
        const response = await superTest(testServer)
        .get('/readcompany/nameTest')

        expect(response.status).toBe(302); 
    })
    test('DELETE deletecompany/nameTest - should return status 200', async () =>{
        const response = await superTest(testServer)
        .delete('/deletecompany/nameTest')

        expect(response.status).toBe(302)
    })
    test('GET readcompany/nameTest - should return status 404', async () => {
        const response = await superTest(testServer)
        .get('/readcompany/nameTest')

        expect(response.status).toBe(404); 
    })
})
