// tests/api.test.ts
import { test, expect } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

test('API 14: GET User Account Detail By Email', async () => {
    const emailData = {
        email: 'pepe@gmail.com'
    };

    const response = await apiRequest.get('/getUserDetailByEmail', emailData);

    const responseBody = await response.json();

    await apiRequest.checkResponseCode(responseBody, 200);

    console.log(JSON.stringify(responseBody, null, 2));
    
    expect(responseBody.user).toHaveProperty('email', emailData.email);
});
