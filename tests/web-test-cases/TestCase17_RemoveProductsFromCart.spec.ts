import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions';
import * as verifications from '../../helpers/verifications';

test('Test Case 17: Remove Products From Cart', async ({ page }) => {
    await actions.navigateToHomePage(page);
    await verifications.verifyHomePage(page);
    await expect(page).toHaveScreenshot('home-page.png');
    await actions.hoverFirstProductAndAddToCart(page);
    await actions.clickCartSec(page);
    await verifications.verifyCartPage(page);
    await expect(page).toHaveScreenshot('cart-page.png');
    await actions.removeFirstProductFromCart(page);
    await verifications.verifyProductRemovedFromCart(page);
    await expect(page).toHaveScreenshot('product-removed.png');
});
