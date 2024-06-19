// tests/api.test.ts
import { test, expect, request } from '@playwright/test';

test('API 1: Get All Products List', async ({ request }) => {

  const baseURL = 'https://automationexercise.com/api';
  const response = await request.get(`${baseURL}/productsList`);
  expect(response.status()).toBe(200);

  // Obtener la respuesta en formato JSON
  const responseBody = await response.json();
  console.log(JSON.stringify(responseBody, null, 2));

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
