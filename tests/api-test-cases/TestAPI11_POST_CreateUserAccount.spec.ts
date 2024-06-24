import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

/*
devuelve 400 missing name pero en el json se puede ver que name va como parámetro

Request Data: {"name":"Sebastian","email":"seba@seba.com","password":"123","title":"Mr","birth_date":"15","birth_month":"06","birth_year":"1985","firstname":"Sebastian","lastname":"Smith","company":"Example Inc.","address1":"123 Main St","address2":"Apt 4B","country":"USA","zipcode":"10001","state":"NY","city":"New York","mobile_number":"123-456-7890"}
[Status: 200] POST -> http://automationexercise.com/api/createAccount
{
  "responseCode": 400,
  "message": "Bad request, name parameter is missing in POST request."
}*/

test('API 11: POST To Create/Register User Account', async () => {
    const userDetails = {
        name: 'Sebastian',
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
        country: 'USA',
        zipcode: '10001',
        state: 'NY',
        city: 'New York',
        mobile_number: '123-456-7890'
    };

    const response = await apiRequest.post('/createAccount', userDetails);

    const responseBody = await response.json();

   // No devuelve el responseCode esperado
   await apiRequest.checkResponseCode(responseBody, 201);
});
