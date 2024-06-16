import { expect, test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as verifications from '../helpers/verifications.ts';
import * as fill from '../helpers/fill.ts'

test('Test Case 21: Add review on product', async ({ page }) => {  
    const reviewDetails ={
        name: 'NlC098',
        email: 'nlc0@email.com',
        review: 'Me gusta mucho'
    }
    //PROBLEMAS DE PUBLICIDAD
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await expect(page).toHaveScreenshot('home-page.png');
      await actions.clickProducts(page);
      await verifications.verifyProducts(page);
      await verifications.verifyProductsListVisible(page);
      await expect(page).toHaveScreenshot('products.png');
      await actions.clickFirstProduct(page);
      await verifications.verifyProductDetailPage(page);
      await expect(page).toHaveScreenshot('product-details.png');
      await fill.enterReview(page,reviewDetails);
      await page.click('button[id="button-review"]');
      await verifications.verifyReviewSuccess(page);
      await expect(page).toHaveScreenshot('review-success.png');
    } catch (error) {
      console.error(error);
    } 
});