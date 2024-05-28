import { test } from '@playwright/test';
import * as helpers from './helpers.ts';

  test('Test Case 5: Register User with existing email', async ({ page }) => {  
    
    try {
      await helpers.navigateToHomePage(page);
      await helpers.clickSignup(page);
      await helpers.signupUser(page);
    } catch (error) {
      console.error(error);
    } 
});