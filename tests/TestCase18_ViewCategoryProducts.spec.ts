import { test } from '@playwright/test';
import * as actions from '../helpers/actions';
import * as verifications from '../helpers/verifications';

test('Test Case 18: View Category Products', async ({ page }) => {
    await actions.navigateToHomePage(page);
    await verifications.verifyCategiry(page);
    await actions.clickWomen(page);
    await actions.clickDress(page);
    await verifications.verifyWomenDressProducts(page);
    await actions.clickMen(page);
    await actions.clickJeans(page);
    await verifications.verifyMenJeansProducts(page);

});
