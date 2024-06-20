import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as mod from '../../helpers/mod.ts';
import * as verifications from '../../helpers/verifications.ts';

  test('Test Case 5: Register User with existing email', async ({ page }) => {  
    
    try {

      const userSignupData = {
        email: 'nlc098@email.com',
        name: '123'
      };
      
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await expect(page).toHaveScreenshot('home-page.png');
      await mod.signupExist(page,userSignupData);
    } catch (error) {
      console.error(error);
    } 
});