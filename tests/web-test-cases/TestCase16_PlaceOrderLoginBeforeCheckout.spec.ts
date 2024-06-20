import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as fill from '../../helpers/fill.ts';
import * as verifications from '../../helpers/verifications.ts';
import * as mod from '../../helpers/mod.ts';


test('Test Case 16: Place Order: Login before Checkout', async ({ page }) => {    
    try {

      const userLoginData = {
        email: 'nlc098@email.com',
        password: '123'
      };

      const paymentDetails = {
        nameOnCard: "nico",
        cardNumber: "1234567890123456",
        cvc: "123",
        expiryMonth: "12",
        expiryYear: "2024",
        message:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await expect(page).toHaveScreenshot('home-page.png');
      await mod.login(page,userLoginData);
      await actions.hoverFirstProductAndAddToCart(page);
      await actions.clickCartSec(page);
      await mod.checkout(page,paymentDetails)
      await mod.deleteAccount(page);
      
    } catch (error) {
      console.error(error);
    } 
});
