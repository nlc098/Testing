import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as mod from '../helpers/mod.ts';
import * as verifications from '../helpers/verifications.ts';

  test('Test Case 9: Search Product', async ({ page }) => {  
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickProducts(page);
      await verifications.verifyProducts(page);
      const productName = 'Blue'; // Nombre del producto a buscar
      await mod.searchProduct(page,productName)
    } catch (error) {
      console.error(error);
    } 
});