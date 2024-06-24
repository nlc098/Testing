import { test } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';


test('API 5: POST To Search Product without search_product parameter', async () => {

    const response = await apiRequest.post('/searchProduct');

    const responseBody = await response.json();

    await apiRequest.checkResponseCode(responseBody, 400);
});
