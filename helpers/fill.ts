import {Page} from '@playwright/test';

//PARTE MODULAR 
/*1. Launch browser
  en playwright.config.ts
  use: {
    headless: false,
*/

const URL = 'http://automationexercise.com';
  
const registerUserData = {
    name: 'NlC098',
    email: 'nlc098@email.com',
    password: '123',
    day: '16',
    month: '11',
    year: '1998',
    firstName: 'Nico',
    lastName: 'Lepore',
    company: 'Company',
    address1: '8 de Octubre 1234',
    address2: '18 de Julio 7894',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobileNumber: '1234567890'
  };

  const userLoginData = {
    email: 'nlc098@email.com',
    password: '123'
  };

  const userLoginIncorrectData = {
    email: 'asdqwerd@email.com',
    password: '123'
  };

  const userSignupData = {
    email: 'nlc098@email.com',
    name: '123'
  };

  const contactUsData = {
    email: 'user@email.com',
    name: 'user',
    subject: 'asdasd',
    message:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    filePath: 'C:\\Users\\Usuario\\Desktop\\Testing\\tests\\file.txt'
  
  };

  const paymentDetails = {
    nameOnCard: "nico",
    cardNumber: "1234567890123456",
    cvc: "123",
    expiryMonth: "12",
    expiryYear: "2024"
};

// Función para registrar un nuevo usuario
export async function registerUser(page: Page) {
    await page.locator('input[data-qa="signup-name"]').fill(registerUserData.name);
    await page.locator('input[data-qa="signup-email"]').fill(registerUserData.email);
}

// Función para llenar los detalles de la cuenta
export async function fillAccountDetails(page: Page) {
    await page.click('input[id="id_gender1"]');
    await page.locator('input[id="password"]').fill(registerUserData.password);
    await page.locator('select[id="days"]').selectOption(registerUserData.day);
    await page.locator('select[id="months"]').selectOption(registerUserData.month);
    await page.locator('select[id="years"]').selectOption(registerUserData.year);
    await page.click('input[id="newsletter"]');
    await page.click('input[id="optin"]');
    await page.locator('input[id="first_name"]').fill(registerUserData.firstName);
    await page.locator('input[id="last_name"]').fill(registerUserData.lastName);
    await page.locator('input[id="company"]').fill(registerUserData.company);
    await page.locator('input[id="address1"]').fill(registerUserData.address1);
    await page.locator('input[id="address2"]').fill(registerUserData.address2);
    await page.locator('select[id="country"]').selectOption(registerUserData.country);
    await page.locator('input[id="state"]').fill(registerUserData.state);
    await page.locator('input[id="city"]').fill(registerUserData.city);
    await page.locator('input[id="zipcode"]').fill(registerUserData.zipcode);
    await page.locator('input[id="mobile_number"]').fill(registerUserData.mobileNumber);
}

  // Función para loguear
export async function loggerUser(page: Page) {
    await page.locator('input[data-qa="login-password"]').fill(userLoginData.password);
    await page.locator('input[data-qa="login-email"]').fill(userLoginData.email);
}

  // Función para loguear
export  async function loggerUserIncorrect(page: Page) {
    await page.locator('input[data-qa="login-password"]').fill(userLoginIncorrectData.password);
    await page.locator('input[data-qa="login-email"]').fill(userLoginIncorrectData.email);
  }

  // Función para signupUser que existe
export  async function signupUserExist(page: Page) {
    await page.locator('input[data-qa="signup-name"]').fill(userSignupData.name);
    await page.locator('input[data-qa="signup-email"]').fill(userSignupData.email);
    await page.click('button[data-qa="signup-button"]');

  }




  // Función para completar el formulario de contacto
export async function fillContactForm(page: Page) {
    await page.locator('input[data-qa="name"]').fill(contactUsData.name);
    await page.locator('input[data-qa="email"]').fill(contactUsData.email);
    await page.locator('input[data-qa="subject"]').fill(contactUsData.subject);
    await page.locator('textarea[data-qa="message"]').fill(contactUsData.message);
    await page.locator('input[name="upload_file"]').setInputFiles(contactUsData.filePath);
  }

// Realizar una búsqueda de producto
export async function searchProduct(page: Page, productName: string) {
  await page.locator('input[id="search_product"]').fill( productName);
  await page.press('input[id="search_product"]', 'Enter');
  await page.click('button[id="submit_search"]')
}




// Función para ingresar el correo electrónico y hacer clic en el botón
export async function enterEmailAndSubscribe(page: Page, email: string) {
  await page.locator('input[type="email"]').fill(email);
  await page.click('button[type="submit"]');
}


// Función para ingresar el correo electrónico y hacer clic en el botón
export async function enterDescriptionAndPlaceOrder(page) {
  await page.locator('textarea[class="form-control"]').fill(contactUsData.message);
  await page.click('a[href="/payment"]');
}


export async function enterPaymentDetails(page) {
  await page.locator('input[data-qa="name-on-card"]').fill(paymentDetails.nameOnCard);
  await page.locator('input[data-qa="card-number"]').fill(paymentDetails.cardNumber);
  await page.locator('input[data-qa="cvc"]').fill(paymentDetails.cvc);
  await page.locator('input[data-qa="expiry-month"]').fill(paymentDetails.expiryMonth);
  await page.locator('input[data-qa="expiry-year"]').fill(paymentDetails.expiryYear);
}