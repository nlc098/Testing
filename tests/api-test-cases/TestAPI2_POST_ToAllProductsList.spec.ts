import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

test('API 2: POST To All Products List', async () => {
    const response = await apiRequest.post('/productsList');

    const responseBody = await response.json();

    await apiRequest.checkResponseCode(responseBody, 405);

    console.log(JSON.stringify(responseBody, null, 2));
});
