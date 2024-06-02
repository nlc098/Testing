import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as verifications from '../helpers/verifications.ts';
import * as mod from '../helpers/mod.ts';

//No funciona
test('Test Case 20: Search Products and Verify Cart After Login', async ({ page }) => {    
    try {

      const userLoginData = {
        email: 'nlc098@email.com',
        password: '123'
      };

    await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickProducts(page);
      await verifications.verifyProducts(page);
      const productName = 'Dress';
      await mod.searchProduct(page,productName)
      await verifications.verifySearchedProductsAreVisible(page,productName);
      await actions.addProductsToCart(page);
      await actions.clickCart(page);
      await verifications.verifyProductsAddedToCart(page);
      await mod.login(page,userLoginData);
      await actions.clickCart(page);
      await verifications.verifyProductsAddedToCart(page);
 
      
    } catch (error) {
      console.error(error);
    } 
});
