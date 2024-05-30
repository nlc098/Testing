import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as verifications from '../helpers/verifications.ts';

  test('Test Case 8: Verify All Products and product detail page', async ({ page }) => {  
    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickProducts(page);
      await verifications.verifyProducts(page);
      await verifications.verifyProductsListVisible(page);
      await actions.clickFirstProduct(page);
      await verifications.verifyProductDetailPage(page);
    } catch (error) {
      console.error(error);
    } 
});