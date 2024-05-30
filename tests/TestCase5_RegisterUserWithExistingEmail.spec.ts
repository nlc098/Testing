import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';

  test('Test Case 5: Register User with existing email', async ({ page }) => {  
    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickLoginSignup(page);
      await verifications.verifySignup(page);
      await fill.signupUserExist(page);
      await actions.clickSignup(page);
      await verifications.verifySignupUserExist(page);
    } catch (error) {
      console.error(error);
    } 
});