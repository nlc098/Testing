import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as mod from '../../helpers/mod.ts';
import * as verifications from '../../helpers/verifications.ts';

  test('Test Case 22: Add to cart from Recommended items', async ({ page }) => {  
    try {
      await actions.navigateToHomePage(page);
      await actions.scrollToFooter(page);
      await verifications.verifyRecommendedItems(page);
      await actions.hoverFirstRecommendedProductAndAddToCart(page);
      await actions.clickCartSec(page);
      await verifications.verifyProductsAddedToCart(page);
    } catch (error) {
      console.error(error);
    } 
});