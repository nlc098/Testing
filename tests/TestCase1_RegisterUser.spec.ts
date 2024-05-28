import { test } from '@playwright/test';
import * as helpers from './helpers.ts';


test('Test Case 1: Register User', async ({ page }) => {  
    
    try {
      await helpers.navigateToHomePage(page);
      await helpers.clickSignup(page);
      await helpers.registerUser(page);
      await helpers.fillAccountDetails(page);
      await helpers.verifyLoggedInAndDeleteAccount(page);
    } catch (error) {
      console.error(error);
    } 
});
