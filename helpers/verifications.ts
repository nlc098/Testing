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
export async function verifyLoggedInAs(page: Page): Promise<string> {
    const loggedInAsText = await page.textContent(`a:has-text("Logged in as ")`);
    if (!loggedInAsText) {
        throw new Error('Logged in as no es visible');
    }
    // Extraer el nombre de usuario
    const startIndex = loggedInAsText.indexOf('Logged in as ') + 'Logged in as '.length;
    const username = loggedInAsText.substring(startIndex).trim();
    console.log('Logged in as ', username);
    
    return username;
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
    await page.waitForSelector('h2:has-text("Subscription")');
    console.log('El texto "SUBSCRIPTION" es visible en la página.');
}

// Función para verificar que el mensaje de éxito 'You have been successfully subscribed!' es visible
export async function verifySubscriptionSuccessMessage(page: Page) {
    await page.waitForSelector('div.alert-success:has-text("You have been successfully subscribed!")');
    console.log('El mensaje de éxito de suscripción es visible');
}

// Función para verificar si se agregaron correctamente los productos
export async function verifyProductsAddedToCart(page: Page) {
    await page.waitForSelector('.table-responsive.cart_info');
    const productRows = await page.$$('.table-responsive.cart_info tbody tr');
    if (productRows.length < 1) {
        throw new Error('Los productos no fueron agregados correctamente');
    }
    console.log('Los productos fueron agregados correctamente al carrito');
}

// Función para verificar los detalles de los productos
export async function verifyProductDetailsInCart(page: Page) {
    await page.waitForSelector('.table-responsive.cart_info');
    const productRows = await page.$$('.table-responsive.cart_info tbody tr');
    for (const row of productRows) {
        // Obtiene los detalles del producto
        const productNameElement = await row.$('.cart_description h4 a');
        const productPriceElement = await row.$('.cart_price p');
        const productQuantityElement = await row.$('.cart_quantity button');
        const productTotalElement = await row.$('.cart_total p');
        // Verifica si los elementos existen antes de obtener su texto
        const productName = productNameElement ? await productNameElement.textContent() : '';
        const productPrice = productPriceElement ? await productPriceElement.textContent() : '';
        const productQuantity = productQuantityElement ? await productQuantityElement.textContent() : '';
        const productTotal = productTotalElement ? await productTotalElement.textContent() : '';
        // Imprime los detalles del producto
        console.log(`Product Name: ${productName}`+`, Price: ${productPrice}`+`, Quantity: ${productQuantity}`+`, Total: ${productTotal}`);

    }
}

// Función para verificar la cantidad del producto
export async function verifyProductQuantity(page: Page) {
    await page.waitForSelector('.table-responsive.cart_info'); 
    const productQuantityElement = await page.$('.cart_quantity button');
    const productQuantity = productQuantityElement ? await productQuantityElement.textContent() : null; 
    if (!productQuantity || productQuantity.trim() !== '4') {
        throw new Error('La cantidad de productos no es exacta.');
    }
    console.log('La cantidad de productos es exacta.');
}


// Verifica que la página del carrito se muestre correctamente.

export async function verifyCartPage(page: Page) {
    await page.waitForSelector('.cart_info'); 
    const cartInfo = await page.$('.cart_info');
    if (!cartInfo) {
        throw new Error('La página del carrito no se ha cargado correctamente');
    }
    console.log('La página del carrito se ha cargado correctamente');
}

//Verifica que la página del checkout se muestre correctamente.

export async function verifyAddressDetailsAndReviewOrder(page: Page) {
    await page.waitForSelector('h3:has-text("Your delivery address")'); 
    await page.waitForSelector('h3:has-text("Your billing address")'); 
    const deladd = await page.$('h3:has-text("Your delivery address")');
    const billadd = await page.$('h3:has-text("Your billing address")');
    if (!deladd && !billadd ) {
        throw new Error('La página del checkout no se ha cargado correctamente');
    }
    console.log('La página del checkout se ha cargado correctamente');
}


// Función para verificar que la cuenta ha sido eliminada
export async function verifyOrderPlacedSuccessfully(page: Page) {
    const OrderPlaced = await page.textContent('h2:has-text("Order Placed!")');
    if (!OrderPlaced) {
        throw new Error('Order Placed! no es visible');
    }
    console.log('Order Placed! es visible');
}

// Función para verificar que el producto ha sido eliminado
export async function verifyProductRemovedFromCart(page: Page) {
        await page.waitForSelector('#empty_cart', { state: 'visible' });
        const isEmpty = await page.isVisible('#empty_cart');
        if (isEmpty) {
            console.log('El carrito está vacío');
        } else {
            console.log('El carrito no está vacío');
        }
}

// Función para verificar que aparecen las categorias
export async function verifyCategiry(page: Page) {
    const OrderPlaced = await page.textContent('h2:has-text("Category")');
    if (!OrderPlaced) {
        throw new Error('Category no es visible');
    }
    console.log('Category es visible');
}

// Función para verificar que aparece el texto de la categoría y productos especificados
export async function verifyCategoryProducts(page: Page, categoryProductsText: string) {
    const isCategoryVisible = await page.isVisible(`h2:has-text("${categoryProductsText}")`);
    if (!isCategoryVisible) {
        throw new Error(`${categoryProductsText} no es visible`);
    }
    console.log(`${categoryProductsText} es visible`);
}

// Función para verificar que aparecen "Brands"
export async function verifyBrandsVisible(page: Page) {
    const brand = await page.waitForSelector('.brands_products');
    if (!brand) {
        throw new Error('Brandes no visible');
    }
    console.log('Brand es visible');
}


// Función para verificar que aparece el titulo del producto Brands
export async function verifyBrandPage(page: Page, brand: string) {
    const brandp = await page.waitForSelector(`.features_items:has-text("${brand}")`);
    if (!brandp) {
        throw new Error(`${brand} no visible`);
    }
    console.log(`${brand} es visible`);
}

export async function verifyReviewSuccess(page: Page) {
    await page.waitForSelector('div.alert-success:has-text("Thank you for your review.")');
    console.log('El mensaje de éxito de reseña es visible');
}