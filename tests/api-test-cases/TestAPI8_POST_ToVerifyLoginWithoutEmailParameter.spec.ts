import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

test('API 8: POST To Verify Login without email parameter', async () => {
    const passwordData = {
        password: '12345678910'
    };

    const response = await apiRequest.post('/verifyLogin', passwordData);

    const responseBody = await response.json();

    await apiRequest.checkResponseCode(responseBody, 400);

    console.log(JSON.stringify(responseBody, null, 2));
});
