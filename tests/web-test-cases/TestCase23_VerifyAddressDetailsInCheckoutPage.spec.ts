import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as verifications from '../../helpers/verifications.ts';
import * as mod from '../../helpers/mod.ts';


test('Test Case 23: Verify address details in checkout page', async ({ page }) => {    
    try {
      const registerUserData = {
        name: 'santi7',
        email: 'santi7@email.com',
        password: '123',
        day: '16',
        month: '11',
        year: '1998',
        firstName: 'santi2',
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
      //await expect(page).toHaveScreenshot('home-page.png');
      await mod.signup(page,registerUserData);
      await actions.hoverFirstProductAndAddToCart(page);
      await actions.clickCartSec(page);
      await mod.checkoutPage(page);
      await verifications.verifyDeliveryAdress(page, registerUserData);
      await verifications.verifyBillingAdress(page, registerUserData);
      await mod.deleteAccount(page);
      
    } catch (error) {
      console.error(error);
    } 
});
