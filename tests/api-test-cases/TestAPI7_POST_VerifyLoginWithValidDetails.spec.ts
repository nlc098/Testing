import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

/*
devuelve 400 email or password parameter is missing pero en el json se puede ver que tanto email y password van como parámetro

Request Data: {"email":"seba@seba","password":"123"}
[Status: 200] POST -> http://automationexercise.com/api/verifyLogin
{
  "responseCode": 400,
  "message": "Bad request, email or password parameter is missing in POST request."
}
*/

test('API 7: POST To Verify Login with valid details', async () => {
    const loginDetails = {
        email:'seba@seba',
        password: '123'
    };

    const response = await apiRequest.post('/verifyLogin', loginDetails);

    const responseBody = await response.json();

    // No devuelve el responseCode esperado
    await apiRequest.checkResponseCode(responseBody, 200);

    console.log("\nResponse Body = " + JSON.stringify(responseBody, null, 2));
});
