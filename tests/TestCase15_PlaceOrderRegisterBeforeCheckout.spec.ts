import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';


test('Test Case 15: Place Order: Register before Checkout', async ({ page }) => {    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickLoginSignup(page);
      await fill.registerUser(page);
      await actions.clickSignup(page);
      await fill.fillAccountDetails(page);
      await actions.clickCreateAccount(page);
      await verifications.verifyAccountCreated(page);
      await actions.clickContinue(page);
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
