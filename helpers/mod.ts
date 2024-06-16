import * as actions from './actions.ts';
import * as fill from './fill.ts';
import * as verifications from './verifications.ts';


export async function deleteAccount(page) {
    await actions.clickDeleteAccount(page);
    await verifications.verifyAccountDeleted(page);
    await actions.clickContinue(page);
}

export async function login(page, userData) {
    await actions.clickLoginSignup(page);
    await verifications.verifyLogin(page);
    await fill.loggerUser(page, userData);
    await actions.clickLogin(page);
    await verifications.verifyLoggedInAs(page); 
}

export async function loginIncorrect(page, userData) {
    await actions.clickLoginSignup(page);
    await verifications.verifyLogin(page);
    await fill.loggerUser(page,userData);
    await actions.clickLogin(page);
    await verifications.verifyUserIncorrect(page); 
}

export async function signup(page, userData) {
    await actions.clickLoginSignup(page);
    await verifications.verifySignup(page);
    await fill.registerUser(page,userData);
    await actions.clickSignup(page);
    await verifications.verifyEnterAccountInformation(page);
    await fill.fillAccountDetails(page,userData);
    await actions.clickCreateAccount(page);
    await verifications.verifyAccountCreated(page);
    await actions.clickContinue(page);
    await verifications.verifyLoggedInAs(page);
}

export async function signupExist(page, userData) {
    await actions.clickLoginSignup(page);
    await verifications.verifySignup(page);
    await fill.signupUserExist(page,userData);
    await actions.clickSignup(page);
    await verifications.verifySignupUserExist(page);
}

export async function contactUs(page, contactUsData) {
    await actions.clickContactUs(page);
    await verifications.verifyContactUs(page);
    await fill.fillContactForm(page,contactUsData);
    await actions.submitForm(page);
    await verifications.verifyFormSubmissionSuccess(page);
}

export async function searchProduct(page,productName) {
    console.log(`Buscando el producto "${productName}"`);
    await fill.searchProduct(page,productName);
    await verifications.verifySearchedProductsAreVisible(page,productName);
}

export async function subscription(page) {
    await actions.scrollToFooter(page);
    await verifications.verifySubscriptionText(page);
    const email = 'user@email.com';
    await fill.enterEmailAndSubscribe(page,email);
    await verifications.verifySubscriptionSuccessMessage(page);
}

export async function checkout(page,paymentDetails) {
    await actions.clickProceedToCheckout(page);
    await verifications.verifyAddressDetailsAndReviewOrder(page);
    await fill.enterDescriptionAndPlaceOrder(page,paymentDetails);
    await fill.enterPaymentDetails(page,paymentDetails);
    await actions.payAndConfirmOrder(page);
    await verifications.verifyOrderPlacedSuccessfully(page);
}

