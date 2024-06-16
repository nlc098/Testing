import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as verifications from '../helpers/verifications.ts';
import * as mod from '../helpers/mod.ts';

test('Test Case 2: Login User with correct email and password', async ({ page }) => {  
    
    try {
      const userLoginData = {
        email: 'nlc098@email.com',
        password: '123'
      };
      
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await mod.login(page,userLoginData);
      await mod.deleteAccount(page)
    } catch (error) {
      console.error(error);
    } 
});
