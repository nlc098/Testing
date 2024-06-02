import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';

test('Register User', async ({ page }) => {  
    
    try {
      await actions.navigateToHomePage(page);
      await actions.clickLoginSignup(page);
      await fill.registerUser(page);
      await actions.clickSignup(page);
      await fill.fillAccountDetails(page);
      await actions.clickCreateAccount(page)
      
    } catch (error) {
      console.error(error);
    } 
});