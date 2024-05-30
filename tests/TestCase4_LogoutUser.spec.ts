import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';

test('Test Case 4: Logout User', async ({ page }) => {  
    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickLoginSignup(page);
      await verifications.verifyLogin(page);
      await fill.loggerUser(page);
      await actions.clickLogin(page);
      await verifications.verifyLoggedInAs(page);
      await actions.clickLogout(page);
      await verifications.verifyLogin(page);
    } catch (error) {
      console.error(error);
    } 
});
