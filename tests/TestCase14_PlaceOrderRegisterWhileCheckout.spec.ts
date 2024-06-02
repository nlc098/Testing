import { test } from '@playwright/test';
import * as actions from '../helpers/actions';
import * as verifications from '../helpers/verifications';
import * as fill from '../helpers/fill.ts';
import * as mod from '../helpers/mod.ts';

test('Test Case 14: Place Order: Register while Checkout', async ({ page }) => {

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
    await actions.hoverFirstProductAndAddToCart(page);
    await actions.clickCartSec(page);
    await verifications.verifyCartPage(page);
    await actions.clickProceedToCheckout(page);
    await actions.clickRegisterOrLogin(page);
    await mod.login(page,userLoginData);
    await actions.clickCart(page);
    await mod.checkout(page,paymentDetails);
    await mod.deleteAccount(page);
});
