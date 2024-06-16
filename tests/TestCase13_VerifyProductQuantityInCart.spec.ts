import { expect, test } from '@playwright/test';
import * as actions from '../helpers/actions';
import * as verifications from '../helpers/verifications';

test('Test Case 13: Verify Product quantity in Cart', async ({ page }) => {
  await actions.navigateToHomePage(page);
  await verifications.verifyHomePage(page);
  await expect(page).toHaveScreenshot('home-page.png');
  await actions.clickFirstProduct(page);
  await actions.increaseQuantity(page);
  await actions.clickAddCart(page);
  await actions.clickCartSec(page);
  await verifications.verifyProductQuantity(page);
  await expect(page).toHaveScreenshot('product-quantity.png');
 
});
