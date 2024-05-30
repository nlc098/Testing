import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';

  test('Test Case 9: Search Product', async ({ page }) => {  
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickProducts(page);
      await verifications.verifyProducts(page);
      const productName = 'Blue'; // Nombre del producto a buscar
      console.log(`Buscando el producto "${productName}"`);
      await fill.searchProduct(page,productName);
      await verifications.verifySearchedProductsAreVisible(page,productName);
    } catch (error) {
      console.error(error);
    } 
});