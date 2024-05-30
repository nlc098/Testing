import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as verifications from '../helpers/verifications.ts';

  test('Test Case 7: Verify Test Cases Page', async ({ page }) => {  
    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickTestButton(page);
      await verifications.verifyTestCases(page);
    } catch (error) {
      console.error(error);
    } 
});