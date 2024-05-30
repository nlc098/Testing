import { test } from '@playwright/test';
import * as actions from '../helpers/actions.ts';
import * as fill from '../helpers/fill.ts';
import * as verifications from '../helpers/verifications.ts';

  test('Test Case 6: Contact Us Form', async ({ page }) => {  
    
    try {
      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      await actions.clickContactUs(page);
      await verifications.verifyContactUs(page);
      await fill.fillContactForm(page);
      await actions.submitForm(page);
      await verifications.verifyFormSubmissionSuccess(page);
      await actions.clickHomeButton(page);
      await verifications.verifyHomePage(page);
    } catch (error) {
      console.error(error);
    } 
});