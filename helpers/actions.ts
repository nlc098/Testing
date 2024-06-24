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

//Publicidad
export async function closeAdIfPresent(page: Page) {
    try {
        // Selector para el botón de cierre de la publicidad
        const closeButtonSelector = 'div[class="btn skip"]';

        // Función interna para manejar el clic en el botón dentro del iframe
        const clickCloseButtonInFrame = async () => {
            try {
                const frames = page.frames();
                for (const frame of frames) {
                    if (await frame.isVisible(closeButtonSelector)) {
                        await frame.click(closeButtonSelector);
                        console.log('Se cerró la publicidad correctamente.');
                        return true;
                    }
                }
                return false;
            } catch (error) {
                console.error('Error al intentar cerrar la publicidad dentro del iframe:', error);
                return false;
            }
        };

        // Verificar si la publicidad está dentro de un iframe y cerrarla si está presente
        if (!(await clickCloseButtonInFrame())) {
            // Si la publicidad no está dentro de un iframe, intenta cerrarla directamente en la página
            if (await page.isVisible(closeButtonSelector)) {
                await page.click(closeButtonSelector);
                console.log('Se cerró la publicidad correctamente.');
            } else {
                console.warn('El botón de cierre de la publicidad no está visible en la página actual.');
            }
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

//Hace hover sobre el primer producto Recomendado y hace clic en 'Add to cart'.
export async function hoverFirstRecommendedProductAndAddToCart(page: Page) {
    const addToCartButtonSelector = 'div[id=recommended-item-carousel] a[data-product-id="4"]';
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
// Función para hacer clic en una categoría
export async function clickCategory(page: Page, category: string) {
    await page.click(`a[href="#${category}"]`);
}

// Función para hacer clic en una subcategoría
export async function clickSubCategory(page: Page, subCategoryLink: string) {
    await page.click(`a[href="${subCategoryLink}"]`);
    await closeAdIfPresent(page);
}

// Función para hacer clic en un Brand
export async function clickBrand(page: Page, brand: string) {
    await page.click(`a[href="/brand_products/${brand}"]`);
}

// Funcion para hacer click en todos los botones de "Add to Cart"
export async function addProductsToCart(page: Page) {
    const addToCartButtons = await page.$$('div.productinfo a.btn.btn-default.add-to-cart');
    for (const a of addToCartButtons) {
        await a.click();
        await clickContinueShoppingButton(page);
    }
}

export async function addFeaturesProductsToCart(page: Page, n: number) {
    const addToCartButtons = await page.$$('div.productinfo a.btn.btn-default.add-to-cart');
    for (let i = 0; i < n && i < addToCartButtons.length; i++) {
        try {
            await addToCartButtons[i].click();
            await clickContinueShoppingButton(page);
        } catch (error) {
            console.error('Error clicking "Add to Cart" button:', error);
        }
    }
}

export async function hideAds(page: Page) {
    // Selector basado en las propiedades únicas del elemento
    const selector = 'path[d="M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z"][stroke="#FAFAFA"][stroke-width="1"][fill="#FAFAFA"]';

    // Verifica si el elemento está visible
    const isVisible = await page.isVisible(selector);

    // Si el elemento está visible, haz clic en él
    if (isVisible) {
        // Espera a que el elemento esté presente en el DOM
        await page.waitForSelector(selector, { state: 'attached' });
        await page.click(selector);
    } 
}

export async function clickArrow(page: Page) {
    await page.click('#scrollUp');
}

export async function scrollToTop(page: Page) {
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });
}