import { test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as verifications from '../../helpers/verifications.ts';
import * as fill from '../../helpers/fill.ts';
import * as mod from '../../helpers/mod.ts';

test('Test Case 24: Download Invoice after purchase order', async ({ page }) => {
    try {
        const message = {
          email: '',
          name: '',
          subject: '',
          message: 'descripcion del producto',
          filePath: ''
        };

        const registerUserData = {
            name: 'yona',
            email: 'yona@email.com',
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
        await verifications.verifyFeaturedProducts(page);
        await actions.addFeaturesProductsToCart(page, 1); // agrega n productos de la pagina principal al carrito
        await actions.clickCart(page);
        await verifications.verifyProductsAddedToCart(page);
        await actions.clickProceedToCheckout(page);
        await actions.clickRegisterOrLogin(page);
        await mod.signup(page,registerUserData);
        await actions.clickCart(page);
        await actions.clickProceedToCheckout(page);
        await verifications.verifyAddressDetailsAndReviewOrder(page);
        await fill.enterDescriptionAndPlaceOrder(page, message);
        await mod.executePayment(page,paymentDetails);
        await mod.downloadInvoice(page);
        await mod.deleteAccount(page);
    } catch (error) {
        console.error(error);
    }
});
