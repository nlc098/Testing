import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';

  test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {  
    
    try {

      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickLoginSignup(page);
      await verifications.verifyLogin(page);
      await fill.loggerUserIncorrect(page);
      await actions.clickLogin(page);
      await verifications.verifyUserIncorrect(page);
    } catch (error) {
      console.error(error);
    } 
});