import { test } from '@playwright/test';
import * as helpers from './helpers.ts';

  test('Test Case 7: Verify Test Cases Page', async ({ page }) => {  
    
    try {
      await helpers.navigateToHomePage(page);
      await helpers.clickTestButtonAndVerify(page);
    } catch (error) {
      console.error(error);
    } 
});