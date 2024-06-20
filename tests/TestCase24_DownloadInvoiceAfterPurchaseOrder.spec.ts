import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as verifications from '../helpers/verifications.ts';
import * as fill from '../helpers/fill.ts';
import * as mod from '../helpers/mod.ts';

test('Test Case 24: Download Invoice after purchase order', async ({ page }) => {
    try {

        const registerUserData = {
            name: 'pepe',
            email: 'pepe@email.com',
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

        await actions.navigateToHomePage(page); // 1 y 2
        await verifications.verifyHomePage(page); // 3
        await actions.addProductsToCart(page); // 4 -> crear funcion auxiliar que se;eccione x productos
        await actions.clickCart(page); // 5
        await verifications.verifyProductsAddedToCart(page); // 6
        await actions.clickProceedToCheckout(page); // 7
        await actions.clickRegisterOrLogin(page); // 8
        await mod.signup(page,registerUserData); // 9, 10 y 11
        await actions.clickCart(page); // 12
        await actions.clickProceedToCheckout(page); // 13
        await verifications.verifyAddressDetailsAndReviewOrder(page); // 14
        // 15 - crear fill -> Enter description in comment text area
        await mod.checkout(page,paymentDetails) // 16, 17 y 18
        // 19 y 20 - crear action -> Click Download Invoice, click button continue
        await mod.deleteAccount(page); // 21 y 22

    } catch (error) {
        console.error(error);
    }
});
