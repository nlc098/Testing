import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

test('API 4: PUT To All Brands List', async () => {
    const response = await apiRequest.put('/brandsList');

    const responseBody = await response.json();

    await apiRequest.checkResponseCode(responseBody, 405);

    console.log(JSON.stringify(responseBody, null, 2));
});
