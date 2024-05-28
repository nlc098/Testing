import { test } from '@playwright/test';
import * as helpers from './helpers.ts';

  test('Test Case 6: Contact Us Form', async ({ page }) => {  
    
    try {
      await helpers.navigateToHomePage(page);
      await helpers.clickContactUs(page);
      await helpers.fillContactForm(page);
      await helpers.submitAndVerifyForm(page);
      await helpers.clickHomeButtonAndVerify(page);
    } catch (error) {
      console.error(error);
    } 
});