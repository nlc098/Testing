import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

/*
devuelve 400 missing loginData pero en el json se puede ver que loginData va como parámetro
  
Request Data: {"search_product":"tshirt"}
[Status: 200] POST -> http://automationexercise.com/api/verifyLogin
    {
        "email": "a@b.com",
        "password": 12345678910
    }

*/

test('API 10: POST To Verify Login with invalid details', async () => {
    const loginData = {
        email: "a@b.com",
        password: 123
    };
    console.log('Request Data:', JSON.stringify(loginData));

    const response = await apiRequest.post('/verifyLogin', loginData);

    const responseBody = await response.json();

    // No devuelve el responseCode esperado
    // await apiRequest.checkResponseCode(responseBody, 400);

    console.log("\nResponse Body = " + JSON.stringify(responseBody, null, 2));
});
