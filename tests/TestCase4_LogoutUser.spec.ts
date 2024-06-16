import { test,expect } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as verifications from '../helpers/verifications.ts';
import * as mod from '../helpers/mod.ts';


test('Test Case 4: Logout User', async ({ page }) => {  
    
    try {

      const userLoginData = {
        email: 'nlc098@email.com',
        password: '123'
      };
      
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await expect(page).toHaveScreenshot('home-page.png');
      await mod.login(page,userLoginData);
      await actions.clickLogout(page);
      await verifications.verifyLogin(page);
      await expect(page).toHaveScreenshot('logged-out-page.png');
      
    } catch (error) {
      console.error(error);
    } 
});
