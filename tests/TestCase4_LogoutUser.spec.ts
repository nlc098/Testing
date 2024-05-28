import { test } from '@playwright/test';
import * as helpers from './helpers.ts';

test('Test Case 4: Logout User', async ({ page }) => {  
    
    try {
      await helpers.navigateToHomePage(page);
      await helpers.clickLogin(page);
      await helpers.loggerUser(page);
      await helpers.verifyLoggedInAndLogoutAccount(page);
    } catch (error) {
      console.error(error);
    } 
});
