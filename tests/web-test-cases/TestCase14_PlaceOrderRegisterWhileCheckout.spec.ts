import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as verifications from '../../helpers/verifications.ts';
import * as fill from '../../helpers/fill.ts';
import * as mod from '../../helpers/mod.ts';

test('Test Case 14: Place Order: Register while Checkout', async ({ page }) => {

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
    await actions.hoverFirstProductAndAddToCart(page);
    await actions.clickCartSec(page);
    await verifications.verifyCartPage(page);
    await expect(page).toHaveScreenshot('cart-page.png');
    await actions.clickProceedToCheckout(page);
    await actions.clickRegisterOrLogin(page);
    await mod.signup(page,registerUserData);
    await actions.clickCart(page);
    await mod.checkout(page,paymentDetails);
    await mod.deleteAccount(page);
});
