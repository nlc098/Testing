// tests/api.test.ts
import { test, expect } from '@playwright/test';

import * as apiRequest from '../../helpers/requests.ts';

test('API 1: Get All Products List', async () => {
    const response = await apiRequest.get('/productsList');

    const responseBody = await response.json();

    await apiRequest.checkResponseCode(responseBody, 200);

    // Asegurarse de que la respuesta contenga una lista de productos
    const products = responseBody.products;
    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);

    products.forEach((product: any) => {
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('brand');
        expect(product).toHaveProperty('category');
    });
});
