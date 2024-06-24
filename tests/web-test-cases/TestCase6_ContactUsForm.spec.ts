import { expect, test } from '@playwright/test';
import * as actions from '../../helpers/actions.ts';
import * as mod from '../../helpers/mod.ts';
import * as verifications from '../../helpers/verifications.ts';

  test('Test Case 6: Contact Us Form', async ({ page }) => {  
    
    try {

      const contactUsData = {
        email: 'user@email.com',
        name: 'user',
        subject: 'asdasd',
        message:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        //el archivo debe estar en la ruta de la siguiente linea
        filePath: 'C:\\Users\\Usuario\\Desktop\\Testing\\tests\\file.txt'
      };

      await actions.navigateToHomePage(page);
      await verifications.verifyHomePage(page);
      //await expect(page).toHaveScreenshot('home-page.png');
      await mod.contactUs(page,contactUsData);
      await actions.clickHomeButton(page);
      await verifications.verifyHomePage(page);
    } catch (error) {
      console.error(error);
    } 
});