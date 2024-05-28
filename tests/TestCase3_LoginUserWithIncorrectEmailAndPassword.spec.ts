import { test } from '@playwright/test';
import * as helpers from './helpers.ts';

  test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {  
    
    try {
      await helpers.navigateToHomePage(page);
      await helpers.clickLogin(page);
      await helpers.loggerUserIncorrect(page);
    } catch (error) {
      console.error(error);
    } 
});