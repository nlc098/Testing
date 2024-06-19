import { test, expect } from '@playwright/test';

test('API 2: POST To All Products List', async ({ request }) => {
  const apiUrl = 'https://automationexercise.com/api/productsList';
  const requestData = {};
  const response = await request.post(apiUrl, {
    data: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseBody = await response.json();
  console.log('Response:', responseBody);

});
