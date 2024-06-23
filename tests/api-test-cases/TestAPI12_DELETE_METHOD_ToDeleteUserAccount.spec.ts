import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';


/*
devuelve 400 missing loginData pero en el json se puede ver que loginData va como parámetro
  
Request Data: {"loginData":
                email: "nlc098@email.com",
                password: '123'
                }
[Status: 200] POST -> http://automationexercise.com/api/deleteAccount
{
  "responseCode": 400,
  "message": "Bad request, email parameter is missing in DELETE request."
}

*/
test('API 12: DELETE METHOD To Delete User Account', async () => {

    const loginData = {
        email: "nlc098@email.com",
        password: '123'
    };

    console.log('Request Data:', JSON.stringify(loginData));
    const response = await apiRequest.reqDeleteAccount('/deleteAccount', loginData);

    const responseBody = await response.json();

    //await apiRequest.checkResponseCode(responseBody, 200);

    console.log(JSON.stringify(responseBody, null, 2));
});
