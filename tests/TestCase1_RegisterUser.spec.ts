import { test, expect } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as verifications from '../helpers/verifications.ts';
import * as mod from '../helpers/mod.ts';


test('Test Case 1: Register User', async ({ page }) => {    
    try {

      const registerUserData = {
        name: 'NlC098',
        email: 'nlc098@email.com',
        password: '123',
        day: '16',
        month: '11',
        year: '1998',
        firstName: 'Nico',
        lastName: 'Lepore',
        company: 'Company',
        address1: '8 de Octubre 1234',
        address2: '18 de Julio 7894',
        country: 'United States',
        state: 'California',
        city: 'Los Angeles',
        zipcode: '90001',
        mobileNumber: '1234567890'
      };
      
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await expect(page).toHaveScreenshot('home-page.png');
      await mod.signup(page,registerUserData);
      await expect(page).toHaveScreenshot('signup.png');
      await mod.deleteAccount(page);

    } catch (error) {
      console.error(error);
    } 
});

