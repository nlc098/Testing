import { test } from '@playwright/test';
import * as helpers from './helpers.ts';

  test('Test Case 9: Search Product', async ({ page }) => {  
    try {
      await helpers.navigateToHomePage(page);
      await helpers.clickProductsAndVerify(page);
      await helpers.verifyProductsListIsVisible(page);
      const productName = 'Blue'; // Nombre del producto a buscar
      console.log(`Buscando el producto "${productName}"`);
      await helpers.searchProduct(page,productName);
      await helpers.verifySearchedProductsAreVisible(page,productName);
    } catch (error) {
      console.error(error);
    } 
});