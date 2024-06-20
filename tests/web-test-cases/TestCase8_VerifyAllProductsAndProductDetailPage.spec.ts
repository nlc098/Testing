import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as verifications from '../../helpers/verifications.ts';

  test('Test Case 8: Verify All Products and product detail page', async ({ page }) => {  
    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await expect(page).toHaveScreenshot('home-page.png');
      await actions.clickProducts(page);
      await verifications.verifyProducts(page);
      await verifications.verifyProductsListVisible(page);
      await expect(page).toHaveScreenshot('products.png');
      await actions.clickFirstProduct(page);
      await verifications.verifyProductDetailPage(page);
      await expect(page).toHaveScreenshot('product-page.png');
    } catch (error) {
      console.error(error);
    } 
});