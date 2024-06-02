import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';

//No funciona
test('Test Case 20: Search Products and Verify Cart After Login', async ({ page }) => {    
    try {

    await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickProducts(page);
      await verifications.verifyProducts(page);
      const productName = 'Dress';
      await fill.searchProduct(page, productName);
      await verifications.verifySearchedProductsAreVisible(page,productName);
      await actions.addProductsToCart(page);
      await actions.clickCart(page);
      await verifications.verifyProductsAddedToCart(page);
      await actions.clickLoginSignup(page);
      await fill.loggerUser(page);
      await actions.clickLogin(page);
      await actions.clickCart(page);
      await verifications.verifyProductsAddedToCart(page);
 
      
    } catch (error) {
      console.error(error);
    } 
});
