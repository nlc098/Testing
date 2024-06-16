import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as mod from '../helpers/mod.ts';
import * as verifications from '../helpers/verifications.ts';

  test('Test Case 11: Verify Subscription in Cart page', async ({ page }) => {  
    try {
        await actions.navigateToHomePage(page);
        await verifications.verifyHomePage(page);
        await actions.clickCart(page);
        await mod.subscription(page)
    } catch (error) {
      console.error(error);
    } 
});