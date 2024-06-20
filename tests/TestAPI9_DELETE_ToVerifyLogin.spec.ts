import { test } from '@playwright/test';

import * as apiRequest from '../helpers/requests.ts';

test('API 9: DELETE To Verify Login', async () => {
    const response = await apiRequest.reqDelete('/verifyLogin');

    const responseBody = await response.json();

    await apiRequest.checkResponseCode(responseBody, 405);

    console.log(JSON.stringify(responseBody, null, 2));
});
