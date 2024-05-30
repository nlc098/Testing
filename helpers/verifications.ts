import { Page } from '@playwright/test';

// Función para verificar que la página principal es visible
export async function verifyHomePage(page: Page) {
    const homePageTitle = await page.title();
    if (!homePageTitle.includes('Automation Exercise')) {
        throw new Error('Home page no es visible');
    }
    console.log('Home page es visible');
}

// Función para verificar que el texto "New User Signup!" es visible
export async function verifySignup(page: Page) {
    const newUserSignupText = await page.textContent('h2:has-text("New User Signup!")');
    if (!newUserSignupText) {
        throw new Error('New User Signup! no es visible');
    }
    console.log('New User Signup! es visible');
}

// Función para verificar que el texto "Login to your account" es visible
export async function verifyLogin(page: Page) {
    const newUserLoginText = await page.textContent('h2:has-text("Login to your account")');
    if (!newUserLoginText) {
        throw new Error('Login to your account! no es visible');
    }
    console.log('Login to your account! es visible');
}


// Función para verificar que el texto "ENTER ACCOUNT INFORMATION" es visible
export async function verifyEnterAccountInformation(page: Page) {
    const enterAccountInfoText = await page.textContent('h2:has-text("Enter Account Information")');
    if (!enterAccountInfoText) {
      throw new Error('ENTER ACCOUNT INFORMATION no es visible');
    }
    console.log('ENTER ACCOUNT INFORMATION es visible');
}

// Función para verificar que el texto "'ACCOUNT CREATED!" es visible
export async function verifyAccountCreated(page: Page) {
    const accountCreatedText = await page.textContent('h2:has-text("Account Created!")');
    if (!accountCreatedText) {
      throw new Error('ACCOUNT CREATED! no es visible');
    }
    console.log('ACCOUNT CREATED! es visible');
}

// Función para verificar que el usuario está logueado
export async function verifyLoggedInAs(page: Page) {
    const loggedInAsText = await page.textContent(`a:has-text("Logged in as ")`);
    if (!loggedInAsText) {
        throw new Error('Logged in as username no es visible');
    }
    console.log('Logged in as username es visible');
}

// Función para verificar que el texto "Your email or password is incorrect!" es visible
export async function verifyUserIncorrect(page: Page) {
    const errorLogin = await page.textContent('p:has-text("Your email or password is incorrect!")');
    if (!errorLogin) {
        throw new Error('Your email or password is incorrect! no es visible');
    }
    console.log('Your email or password is incorrect! es visible');
}

// Función para verificar que el texto "Email Address already exist!" es visible
export async function verifySignupUserExist(page: Page) {
    const errorsignup = await page.textContent('p:has-text("Email Address already exist!")');
    if (!errorsignup) {
        throw new Error('Email Address already exist! no es visible');
      }
      console.log('Email Address already exist! es visible');
}

// Función para verificar que la cuenta ha sido eliminada
export async function verifyAccountDeleted(page: Page) {
    const accountDeletedText = await page.textContent('h2:has-text("Account Deleted!")');
    if (!accountDeletedText) {
        throw new Error('ACCOUNT DELETED! no es visible');
    }
    console.log('ACCOUNT DELETED! es visible');
}

// Función para verificar que el texto "Get In Touch" es visible
export async function verifyContactUs(page: Page) {
    await page.waitForSelector('h2:has-text("Get In Touch")');
    const getInTouchText = await page.textContent('h2:has-text("Get In Touch")');
    if (!getInTouchText) {
        throw new Error('GET IN TOUCH no es visible');
    }
    console.log('GET IN TOUCH es visible');
}

// Función para verificar que el mensaje de éxito del formulario es visible
export async function verifyFormSubmissionSuccess(page: Page) {
    await page.waitForSelector('div:has-text("Success! Your details have been submitted successfully.")', { timeout: 10000 });
    const successMessage = await page.textContent('div:has-text("Success! Your details have been submitted successfully.")');
    if (!successMessage) {
        throw new Error('El mensaje de éxito no es visible');
    }
    console.log('El mensaje de éxito es visible');
}

// Función para verificar que el texto "Test Cases" es visible
export async function verifyTestCases(page: Page) {
    await page.waitForSelector('h2:has-text("Test Cases")');
    const testCase = await page.textContent('h2:has-text("Test Cases")');
    if (!testCase) {
        throw new Error('Test Cases no es visible');
    }
    console.log('Test Cases es visible');
}

// Función para verificar que el texto "All Products" es visible
export async function verifyProducts(page: Page) {
    await page.waitForSelector('h2:has-text("All Products")');
    const testCase = await page.textContent('h2:has-text("All Products")');
    if (!testCase) {
        throw new Error('All Products no es visible');
    }
    console.log('All Products es visible');
}

// Función para verificar que la lista de productos es visible.
export async function verifyProductsListVisible(page: Page) {
    const firstProduct = await page.locator('.features_items .col-sm-4').first();
    if (!await firstProduct.isVisible()) {
        throw new Error('La lista de productos no es visible');
    }
    console.log('La lista de productos es visible');
}

// Función para verificar que la página de detalles del producto es visible
export async function verifyProductDetailPage(page: Page) {
    await page.waitForSelector('.product-information');
    const productDetail = await page.locator('.product-information');
    if (!await productDetail.isVisible()) {
        throw new Error('La página de detalles del producto no es visible');
    }
    console.log('La página de detalles del producto es visible');
}

// Función para verificar que los detalles del producto son visibles
export async function verifyProductDetails(page: Page) {
    const productName = await page.textContent('.product-information h2');
    const category = await page.textContent('.product-information p:nth-of-type(1)');
    const price = await page.textContent('.product-information span > span');
    const availability = await page.textContent('.product-information p:nth-of-type(2)');
    const condition = await page.textContent('.product-information p:nth-of-type(3)');
    const brand = await page.textContent('.product-information p:nth-of-type(4)');

    if (!productName || !category || !price || !availability || !condition || !brand) {
        throw new Error('No todos los detalles del producto son visibles');
    }
    console.log('Los detalles del producto son visibles');
}

// Función para verificar que los productos relacionados con la búsqueda son visibles
export async function verifySearchedProductsAreVisible(page: Page, productName: string) {
    await page.waitForSelector('h2:has-text("SEARCHED PRODUCTS")');
    const searchedProductsTitle = await page.textContent('h2:has-text("SEARCHED PRODUCTS")');
    if (!searchedProductsTitle) {
        throw new Error('SEARCHED PRODUCTS no es visible');
    }
    console.log('SEARCHED PRODUCTS es visible');

    // Obtener el número de productos relacionados con la búsqueda
    const searchedProductsCount = await page.$$eval('div.productinfo', elements => elements.length);

    // Obtener el número total de productos visibles en la página
    const allProductsCount = await page.$$eval('div.product-image-wrapper', elements => elements.length);

    // Verificar si son iguales
    if (searchedProductsCount === allProductsCount) {
        console.log('Todos los productos relacionados con la búsqueda son visibles. ' + allProductsCount + ' productos en total');
    } else {
        throw new Error('No todos los productos relacionados con la búsqueda son visibles');
    }
}

// Función para verificar el texto 'SUBSCRIPTION'
export async function verifySubscriptionText(page: Page) {
    await page.waitForSelector('h2:has-text("SUBSCRIPTION")');
}

// Función para verificar que el mensaje de éxito 'You have been successfully subscribed!' es visible
export async function verifySubscriptionSuccessMessage(page: Page) {
    await page.waitForSelector('div.alert-success:has-text("You have been successfully subscribed!")');
    console.log('El mensaje de éxito de suscripción es visible');
}
