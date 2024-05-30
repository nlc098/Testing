import { Page } from '@playwright/test';
import * as verifcations from "./verifications.ts"

// Función para navegar a la página principal
export async function navigateToHomePage(page: Page) {
    await page.goto('http://automationexercise.com');
    
}

// Función para hacer clic en el botón 'Signup / Login'
export async function clickLoginSignup(page: Page) {
    await page.click('a[href="/login"]');
}

// Función para hacer clic en el botón 'Signup'
export async function clickCreateAccount(page: Page) {
    await page.click('button[data-qa="create-account"]');
}

// Función para hacer clic en el botón 'Signup'
export async function clickContinue(page: Page) {
    await page.click('a[data-qa="continue-button"]');
}

// Función para hacer clic en el botón 'Signup'
export async function clickSignup(page: Page) {
    await page.click('button[data-qa="signup-button"]');
    
}

// Función para hacer clic en el botón 'Login'
export async function clickLogin(page: Page) {
    await page.click('button[data-qa="login-button"]');
    
}

// Función para desloguearte
export async function clickLogout(page: Page) {
    await page.click('a[href="/logout"]');
}

// Función para hacer clic en el botón 'Contact Us'
export async function clickContactUs(page: Page) {
    await page.click('a[href="/contact_us"]');
}

// Función para hacer clic en el botón 'Login'
export async function clickDeleteAccount(page: Page) {
    await page.click('a[href="/delete_account"]');
    
}

// Función para enviar el formulario y verificar el mensaje de éxito
export async function submitForm(page: Page) {
    page.on('dialog', async dialog => {
        console.log('Dialog message:', dialog.message());
        await new Promise(resolve => setTimeout(resolve, 2000));
        await dialog.accept();
    });
    await page.click('input[data-qa="submit-button"]');
}

// Función para volver a la página principal
export async function clickHomeButton(page: Page) {
    await page.click('a:has-text("Home")');

}

// Función para hacer clic en Test Cases
export async function clickTestButton(page: Page) {
    await page.click('a:has-text(" Test Cases")');
    await closeAdIfPresent(page);

}

// Función para cerrar una publicidad si aparece
export async function closeAdIfPresent(page: Page) {
    try {
        await page.frameLocator('iframe[name="aswift_6"]').getByLabel('Close ad').click();
    } catch (error) {
        console.error('Error al intentar cerrar la publicidad:', error);
    }
}

// Función para hacer clic en Product
export async function clickProducts(page: Page) {
    await page.click('a[href="/products"]');
    await closeAdIfPresent(page);
  
}

// Hacer clic en 'View Product' del primer producto y verificar la página de detalles del producto
export async function clickFirstProduct(page: Page) {
    await page.locator('.features_items .col-sm-4').first().locator('.choose a').click();
    
}

// Función para desplazarse hacia abajo hasta el pie de página
export async function scrollToFooter(page: Page) {
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
    await verifcations.verifySubscriptionText(page);
}
