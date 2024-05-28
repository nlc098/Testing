import { test } from '@playwright/test';
import * as helpers from './helpers.ts';

  test('Test Case 10: Verify Subscription in home page', async ({ page }) => {  
    try {
      await helpers.navigateToHomePage(page);
      await helpers.scrollToFooter(page);
      await helpers.verifySubscriptionText(page);
      const email = 'user@email.com';
      await helpers.enterEmailAndSubscribe(page,email);
      await helpers.verifySubscriptionSuccessMessage(page);
    } catch (error) {
      console.error(error);
    } 
});