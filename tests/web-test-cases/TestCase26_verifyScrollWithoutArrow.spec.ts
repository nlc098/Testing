import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as verifications from '../../helpers/verifications.ts';

test('Test Case :  Verify Scroll Up without using "Arrow" button and Scroll Down functionality', async ({ page }) => {  
  try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      //await expect(page).toHaveScreenshot('home-page.png');
      await actions.scrollToFooter(page);
      await verifications.verifySubscriptionText(page);
      //await expect(page).toHaveScreenshot('subscription-text.png');
      await actions.scrollToTop(page);
      await verifications.verifyFullFledged(page);
      //await expect(page).toHaveScreenshot('full-fledged-text-.png');

    } catch (error) {
      console.error(error);
    } 
});