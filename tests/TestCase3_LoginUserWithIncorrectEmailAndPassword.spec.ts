import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as verifications from '../helpers/verifications.ts';
import * as mod from '../helpers/mod.ts';

  test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {  
    
    try {

      const userLoginIncorrectData = {
        email: 'asdqwerd@email.com',
        password: '123'
      }; 

      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await mod.loginIncorrect(page,userLoginIncorrectData);
    } catch (error) {
      console.error(error);
    } 
});