import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';


test('Test Case 16: Place Order: Login before Checkout', async ({ page }) => {    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickLoginSignup(page);
      await fill.loggerUser(page);
      await actions.clickLogin(page);
      await verifications.verifyLoggedInAs(page);
      await actions.hoverFirstProductAndAddToCart(page);
      await actions.clickCartSec(page);
      await actions.clickProceedToCheckout(page);
      await verifications.verifyAddressDetailsAndReviewOrder(page);
      await fill.enterDescriptionAndPlaceOrder(page);
      await fill.enterPaymentDetails(page);
      await actions.payAndConfirmOrder(page);
      await verifications.verifyOrderPlacedSuccessfully(page);
      await actions.clickDeleteAccount(page);
      await verifications.verifyAccountDeleted(page);
      
    } catch (error) {
      console.error(error);
    } 
});
