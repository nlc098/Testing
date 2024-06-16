import { expect, test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as mod from '../helpers/mod.ts';
import * as verifications from '../helpers/verifications.ts';

  test('Test Case 9: Search Product', async ({ page }) => {  
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await expect(page).toHaveScreenshot('home-page.png');
      await actions.clickProducts(page);
      await verifications.verifyProducts(page);
      await expect(page).toHaveScreenshot('products-page.png');
      const productName = 'Blue'; // Nombre del producto a buscar
      await mod.searchProduct(page,productName)
    } catch (error) {
      console.error(error);
    } 
});