import { test } from '@playwright/test';
import * as actions from '../helpers/actions';
import * as verifications from '../helpers/verifications';

test('Test Case 17: Remove Products From Cart', async ({ page }) => {
    await actions.navigateToHomePage(page);
    await verifications.verifyHomePage(page);
    await actions.hoverFirstProductAndAddToCart(page);
    await actions.clickCartSec(page);
    await verifications.verifyCartPage(page);
    await actions.removeFirstProductFromCart(page);
    await verifications.verifyProductRemovedFromCart(page);
});
