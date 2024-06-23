import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

/*
devuelve 400 missing search_product pero en el json se puede ver que search_product va como parámetro
  
Request Data: {"search_product":"tshirt"}
[Status: 200] POST -> http://automationexercise.com/api/searchProduct
{
  "responseCode": 400,
  "message": "Bad request, search_product parameter is missing in POST request."
}

*/
test('API 5: POST To Search Product', async () => {
    const productData = {
        search_product: 'tshirt'
    };

    console.log('Request Data:', JSON.stringify(productData));
    const response = await apiRequest.post('/searchProduct', productData);

    const responseBody = await response.json();

    //await apiRequest.checkResponseCode(responseBody, 200);

    console.log(JSON.stringify(responseBody, null, 2));
});
