import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as verifications from '../../helpers/verifications.ts';

  test('Test Case 7: Verify Test Cases Page', async ({ page }) => {  
    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await expect(page).toHaveScreenshot('home-page.png');
      await actions.clickTestButton(page);
      await verifications.verifyTestCases(page);
      await expect(page).toHaveScreenshot('test-cases-page.png');
    } catch (error) {
      console.error(error);
    } 
});