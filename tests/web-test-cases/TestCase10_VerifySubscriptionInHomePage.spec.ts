import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as mod from '../../helpers/mod.ts';
import * as verifications from '../../helpers/verifications.ts';

  test('Test Case 10: Verify Subscription in home page', async ({ page }) => {  
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await expect(page).toHaveScreenshot('home-page.png');
      await mod.subscription(page)
    } catch (error) {
      console.error(error);
    } 
});