import { expect, test } from '@playwright/test';
import * as actions from '../helpers/actions';
import * as verifications from '../helpers/verifications';

test('Test Case 18: View Category Products', async ({ page }) => {
    //A CAUSA DE LAS PUBLICIDADES A VECES FALLA EL TEST VISUAL
    await actions.navigateToHomePage(page);
    await verifications.verifyCategiry(page);
    await actions.clickCategory(page, 'Women');
    await actions.clickSubCategory(page, '/category_products/1');
    await verifications.verifyCategoryProducts(page, 'Women - Dress Products');
    await expect(page).toHaveScreenshot('women-products.png');
    await actions.clickCategory(page, 'Men');
    await actions.clickSubCategory(page, '/category_products/6');
    await verifications.verifyCategoryProducts(page, 'Men - Jeans Products');
    await expect(page).toHaveScreenshot('men-products.png');

});
