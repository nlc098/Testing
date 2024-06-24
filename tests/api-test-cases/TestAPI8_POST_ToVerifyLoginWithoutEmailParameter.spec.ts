import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

test('API 5: POST To Search Product', async () => {
    const passwordData = {
        password: '12345678910'
    };

    const response = await apiRequest.post('/searchProduct', passwordData);

    const responseBody = await response.json();

    await apiRequest.checkResponseCode(responseBody, 400);
});
