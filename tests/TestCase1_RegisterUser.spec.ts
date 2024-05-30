import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';


test('Test Case 1: Register User', async ({ page }) => {    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickLoginSignup(page);
      await verifications.verifySignup(page);
      await fill.registerUser(page);
      await actions.clickSignup(page);
      await verifications.verifyEnterAccountInformation(page);
      await fill.fillAccountDetails(page);
      await actions.clickCreateAccount(page);
      await verifications.verifyAccountCreated(page);
      await actions.clickContinue(page);
      await verifications.verifyLoggedInAs(page);
      await actions.clickDeleteAccount(page);
      await verifications.verifyAccountDeleted(page);
      await actions.clickContinue(page);
    } catch (error) {
      console.error(error);
    } 
});
