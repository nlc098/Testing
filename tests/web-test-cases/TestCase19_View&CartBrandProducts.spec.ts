import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions';
import * as verifications from '../../helpers/verifications';

test('Test Case 19: View & Cart Brand Products', async ({ page }) => {
    await actions.navigateToHomePage(page);
    await actions.clickProducts(page);
    await verifications.verifyBrandsVisible(page);
    await actions.clickBrand(page, 'Polo');
    await verifications.verifyBrandPage(page, 'Brand - Polo Products');
    await actions.clickBrand(page, 'H&M');
    await verifications.verifyBrandPage(page, 'Brand - H&M Products');
});
