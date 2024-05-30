import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';

test('Test Case 2: Login User with correct email and password', async ({ page }) => {  
    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickLoginSignup(page);
      await verifications.verifyLogin(page);
      await fill.loggerUser(page);
      await actions.clickLogin(page);
      await verifications.verifyLoggedInAs(page);
      await actions.clickDeleteAccount(page);
      await verifications.verifyAccountDeleted(page);
      await actions.clickContinue(page);      
    } catch (error) {
      console.error(error);
    } 
});
