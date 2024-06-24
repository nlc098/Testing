import { expect } from '@playwright/test';
import * as actions from './actions.ts';
import * as fill from './fill.ts';
import * as verifications from './verifications.ts';


export async function deleteAccount(page) {
    await actions.clickDeleteAccount(page);
    await verifications.verifyAccountDeleted(page);
    //await expect(page).toHaveScreenshot('deleted.png');
    await actions.clickContinue(page);
}

export async function login(page, userData) {
    await actions.clickLoginSignup(page);
    await verifications.verifyLogin(page);
    //await expect(page).toHaveScreenshot('login-page.png');
    await fill.loggerUser(page, userData);
    await actions.clickLogin(page);
    await verifications.verifyLoggedInAs(page);
    //await expect(page).toHaveScreenshot('logged-as.png');
}

export async function loginIncorrect(page, userData) {
    await actions.clickLoginSignup(page);
    await verifications.verifyLogin(page);
    //await expect(page).toHaveScreenshot('login-page.png');
    await fill.loggerUser(page, userData);
    await actions.clickLogin(page);
    await verifications.verifyUserIncorrect(page);
    //await expect(page).toHaveScreenshot('incorrect-login.png');
}

export async function signup(page, userData) {
    await actions.clickLoginSignup(page);
    await verifications.verifySignup(page);
    //await expect(page).toHaveScreenshot('registerUser.png');
    await fill.registerUser(page, userData);
    await actions.clickSignup(page);
    await verifications.verifyEnterAccountInformation(page);
    //await expect(page).toHaveScreenshot('fillAccountDetails.png');
    await fill.fillAccountDetails(page, userData);
    await actions.clickCreateAccount(page);
    await verifications.verifyAccountCreated(page);
    await actions.clickContinue(page);
    await verifications.verifyLoggedInAs(page);
}

export async function signupExist(page, userData) {
    await actions.clickLoginSignup(page);
    await verifications.verifySignup(page);
    await fill.signupUserExist(page, userData);
    await actions.clickSignup(page);
    await verifications.verifySignupUserExist(page);
    //await expect(page).toHaveScreenshot('already-exists.png');
}

export async function contactUs(page, contactUsData) {
    await actions.clickContactUs(page);
    await verifications.verifyContactUs(page);
    //await expect(page).toHaveScreenshot('contact-us.png');
    await fill.fillContactForm(page, contactUsData);
    await actions.submitForm(page);
    await verifications.verifyFormSubmissionSuccess(page);
    //await expect(page).toHaveScreenshot('contact-us-success.png');
}

export async function searchProduct(page, productName) {
    console.log(`Buscando el producto "${productName}"`);
    await fill.searchProduct(page, productName);
    await verifications.verifySearchedProductsAreVisible(page, productName);
    await actions.hideAds(page);
    //await expect(page).toHaveScreenshot('search-results.png');
}

export async function subscription(page) {
    await actions.scrollToFooter(page);
    await verifications.verifySubscriptionText(page);
    //await expect(page).toHaveScreenshot('sub-page.png');
    const email = 'user@email.com';
    await fill.enterEmailAndSubscribe(page, email);
    await verifications.verifySubscriptionSuccessMessage(page);
    //await expect(page).toHaveScreenshot('sub-success.png');
}

export async function checkout(page, paymentDetails) {
    await actions.clickProceedToCheckout(page);
    await verifications.verifyAddressDetailsAndReviewOrder(page);
    //await expect(page).toHaveScreenshot('adressAndReview.png');
    await fill.enterDescriptionAndPlaceOrder(page, paymentDetails);
    await fill.enterPaymentDetails(page, paymentDetails);
    await actions.payAndConfirmOrder(page);
    await verifications.verifyOrderPlacedSuccessfully(page);
    //await expect(page).toHaveScreenshot('orderPlacedSuccessfully.png');
}

export async function checkoutPage(page) {
    await actions.clickProceedToCheckout(page);
    await verifications.verifyAddressDetailsAndReviewOrder(page);
}


export async function executePayment(page, paymentDetails) {
    await fill.enterPaymentDetails(page, paymentDetails);
    await actions.payAndConfirmOrder(page);
    await verifications.verifyOrderPlacedSuccessfully(page);
    //await expect(page).toHaveScreenshot('orderPlacedSuccessfully.png');
}

export async function downloadInvoice(page) {
    // Click the link
    await page.click('a[href="/download_invoice/500"]');
    console.log('Download invoice clicked')

    // Wait for the network request and capture it
    const [request] = await Promise.all([
        page.waitForRequest(request => request.url().includes('/download_invoice/500')),
        page.click('a[href="/download_invoice/500"]')
    ]);

    // Get the response and check the status
    const response = await request.response();
    
    if (response.status() === 200) {
        console.log('Request succeeded with status 200');
    } else {
        console.log(`Request failed with status ${response.status()}`);
    }
}

