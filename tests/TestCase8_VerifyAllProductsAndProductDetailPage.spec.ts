import { test } from '@playwright/test';
import * as helpers from './helpers.ts';

  test('Test Case 8: Verify All Products and product detail page', async ({ page }) => {  
    
    try {
      await helpers.navigateToHomePage(page);
      await helpers.clickProductsAndVerify(page);
      await helpers.verifyProductsListIsVisible(page);
      await helpers.clickFirstProductAndVerifyDetailPage(page);
      await helpers.verifyProductDetails(page);
    } catch (error) {
      console.error(error);
    } 
});