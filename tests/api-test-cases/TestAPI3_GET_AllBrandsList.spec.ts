// tests/api.test.ts
import { test, expect } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

test('API 3: Get All Brands List', async () => {
    const response = await apiRequest.get('/brandsList');

    const responseBody = await response.json();

    await apiRequest.checkResponseCode(responseBody, 200);

    console.log(JSON.stringify(responseBody, null, 2));

    // Asegurarse de que la respuesta contenga una lista de productos
    const brands = responseBody.brands;
    expect(Array.isArray(brands)).toBeTruthy();
    expect(brands.length).toBeGreaterThan(0);

    brands.forEach((product: any) => {
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('brand');
    });
});
