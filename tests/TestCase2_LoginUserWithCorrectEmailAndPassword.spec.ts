import { test } from '@playwright/test';
import * as helpers from './helpers.ts';

test('Test Case 2: Login User with correct email and password', async ({ page }) => {  
    
    try {
      await helpers.navigateToHomePage(page);
      await helpers.clickLogin(page);
      await helpers.loggerUser(page);
      await helpers.verifyLoggedInAndDeleteAccount(page);
    } catch (error) {
      console.error(error);
    } 
});
