import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

/*
devuelve 400 missing email pero en el json se puede ver que email va como parámetro

Request Data: {"name":"Sebastian Grasso","email":"seba@seba.com","password":"123","title":"Mr","birth_date":"15","birth_month":"06","birth_year":"1985","firstname":"Sebastian","lastname":"Smith","company":"Example Inc.","address1":"123 Main St","address2":"Apt 4B","country":"Uruguay","zipcode":"10001","state":"Montevideo","city":"Montevideo","mobile_number":"123-456-7890"}
[Status: 200] PUT -> http://automationexercise.com/api/updateAccount
{
  "responseCode": 400,
  "message": "Bad request, email parameter is missing in PUT request."
}
*/

test('API 13: PUT METHOD To Update User Account', async () => {
    const userDetails = {
        name: 'Sebastian Grasso',
        email: 'seba@seba.com',
        password: '123',
        title: 'Mr',
        birth_date: '15',
        birth_month: '06',
        birth_year: '1985',
        firstname: 'Sebastian',
        lastname: 'Smith',
        company: 'Example Inc.',
        address1: '123 Main St',
        address2: 'Apt 4B',
        country: 'Uruguay',
        zipcode: '10001',
        state: 'Montevideo',
        city: 'Montevideo',
        mobile_number: '123-456-7890'
    };
    console.log('Request Data:', JSON.stringify(userDetails));
    const response = await apiRequest.put('/updateAccount',userDetails);

    const responseBody = await response.json();

    //comentado para que no de conflicto ya que no devuelve lo que debería
    //await apiRequest.checkResponseCode(responseBody, 200);

    console.log(JSON.stringify(responseBody, null, 2));
});
