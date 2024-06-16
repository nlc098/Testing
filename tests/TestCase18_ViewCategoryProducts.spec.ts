import { test } from '@playwright/test';
import * as actions from '../helpers/actions';
import * as verifications from '../helpers/verifications';

test('Test Case 18: View Category Products', async ({ page }) => {
    await actions.navigateToHomePage(page);
    await verifications.verifyCategiry(page);
    await actions.clickCategory(page, 'Women');
    await actions.clickSubCategory(page, '/category_products/1');
    await verifications.verifyCategoryProducts(page, 'Women - Dress Products');
    await actions.clickCategory(page, 'Men');
    await actions.clickSubCategory(page, '/category_products/6');
    await verifications.verifyCategoryProducts(page, 'Men - Jeans Products');

});
