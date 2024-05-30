import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';

  test('Test Case 11: Verify Subscription in Cart page', async ({ page }) => {  
    try {
        await actions.navigateToHomePage(page);
        await verifications.verifyHomePage(page);
        await actions.clickCart(page);
        await actions.scrollToFooter(page);
        await verifications.verifySubscriptionText(page);
        const email = 'test@example.com';
        await fill.enterEmailAndSubscribe(page,email);
        await verifications.verifySubscriptionSuccessMessage(page);
    } catch (error) {
      console.error(error);
    } 
});