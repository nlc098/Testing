import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions';
import * as verifications from '../../helpers/verifications';

test('Test Case 12: Add Products in Cart', async ({ page }) => {
  await actions.navigateToHomePage(page);
  await verifications.verifyHomePage(page);
  //await expect(page).toHaveScreenshot('home-page.png');
  await actions.clickProducts(page);
  await actions.hoverFirstProductAndAddToCart(page);
  await actions.clickContinueShoppingButton(page);
  await actions.hoverSecondProductAndAddToCart(page);
  await actions.clickCartSec(page);
  await verifications.verifyProductsAddedToCart(page);
  await verifications.verifyProductDetailsInCart(page);
  //await expect(page).toHaveScreenshot('product-added.png');
});
