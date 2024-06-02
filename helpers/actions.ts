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

// Función para cerrar una publicidad si aparece
export async function closeAdIfPresent(page: Page) {
    try {
        //const adFrame = page.frameLocator('iframe[name="aswift_6"]');
        const closeButton = page.locator('div[class="btn skip"]');

        // Verificar si el iframe de la publicidad está presente y visible
        if (await closeButton.isVisible()) {
            await closeButton.click();
        } 
    } catch (error) {
        console.error('Error al intentar cerrar la publicidad:', error);
    }
}

// Función para hacer clic en Test Cases
export async function clickTestButton(page: Page) {
    await page.click('a:has-text(" Test Cases")');
    await closeAdIfPresent(page);

}

// Función para hacer clic en Product
export async function clickProducts(page: Page) {
    await page.click('a[href="/products"]');
    await closeAdIfPresent(page);
  
}

// Función para verificar la página de detalles del producto
export async function clickFirstProduct(page: Page) {
    await page.locator('.features_items .col-sm-4').first().locator('.choose a').click();
    await closeAdIfPresent(page);
    
}

// Función para desplazarse hacia abajo hasta el pie de página
export async function scrollToFooter(page: Page) {
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
}
//Función para hacer clic en 'Cart' del navbar
export async function clickCart(page: Page) { 
    await page.click('a[href="/view_cart"]');
}

//Función para hacer clic en 'Cart'
export async function clickCartSec(page: Page) { 
    await page.getByRole('link', { name: 'View Cart' }).click();
}

//Función para hacer clic en 'Add Cart'
export async function clickAddCart(page: Page) { 
    await page.getByRole('button', { name: ' Add to cart' }).click();
}

// Hace clic en el botón 'Continue Shopping'.
export async function clickContinueShoppingButton(page: Page) {
    const continueShoppingButtonSelector = 'button.btn.btn-success.close-modal.btn-block[data-dismiss="modal"]';
    await page.waitForSelector(continueShoppingButtonSelector);
    await page.click(continueShoppingButtonSelector);
}

//Hace hover sobre el primer producto y hace clic en 'Add to cart'.
export async function hoverFirstProductAndAddToCart(page: Page) {
    const addToCartButtonSelector = 'a[data-product-id="1"]';
    await page.waitForSelector(addToCartButtonSelector);
    await page.hover(addToCartButtonSelector);
    await page.waitForTimeout(500); // Ajusta el tiempo según sea necesario
    await page.click(addToCartButtonSelector);
}

//Hace hover sobre el segundo producto y hace clic en 'Add to cart'.
export async function hoverSecondProductAndAddToCart(page: Page) {
    const addToCartButtonSelector = 'a[data-product-id="2"]';
    await page.waitForSelector(addToCartButtonSelector);
    await page.hover(addToCartButtonSelector);
    await page.waitForTimeout(500); // Ajusta el tiempo según sea necesario
    await page.click(addToCartButtonSelector);
}


// Función para aumentar la cantidad del producto a 4 y agregarlo al carrito
export async function increaseQuantity(page: Page) {
    await page.locator('#quantity').fill('4');
}


//Función para hacer clic en 'ProceedToCheckout'
export async function clickProceedToCheckout(page: Page) { 
    await page.click('a:has-text("Proceed To Checkout")');
    await closeAdIfPresent(page);
}

//Función para hacer clic en 'RegisterOrLogin'
export async function clickRegisterOrLogin(page: Page) { 
    await page.click('a:has-text("Register / Login")');
}


//Función para hacer clic en 'pay-button'
export async function payAndConfirmOrder(page: Page) { 
    await page.click('button[data-qa="pay-button"]');
}

//Función para hacer clic en 'x' para eliminar el primer producto
export async function removeFirstProductFromCart(page: Page) {
    await page.click('.cart_quantity_delete');
}
//Función para hacer clic en 'Women'
export async function clickWomen(page: Page) {
    await page.click('a[href="#Women"]');
}

//Función para hacer clic en 'Dress'
export async function clickDress(page: Page) {
    await page.click('a[href="/category_products/1"]');
    await closeAdIfPresent(page);
}

//Función para hacer clic en 'Men'
export async function clickMen(page: Page) {
    await page.click('a[href="#Men"]');
}

//Función para hacer clic en 'Jeans'
export async function clickJeans(page: Page) {
    await page.click('a[href="/category_products/6"]');
    await closeAdIfPresent(page);
}