import {Page} from '@playwright/test';

//PARTE MODULAR 
/*1. Launch browser
  en playwright.config.ts
  use: {
    headless: false,
*/

const URL = 'http://automationexercise.com';
  

export interface UserData {
  name: string;
  email: string;
  password: string;
  day: string;
  month: string;
  year: string;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export interface ContactUsData {
  email: string;
  name: string;
  subject: string;
  message: string;
  filePath: string;
}

export interface PaymentDetails {
  nameOnCard: string;
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
  message: string;
}

// Función para registrar un nuevo usuario
export async function registerUser(page: Page, userData: UserData) {
    await page.locator('input[data-qa="signup-name"]').fill(userData.name);
    await page.locator('input[data-qa="signup-email"]').fill(userData.email);
}

// Función para llenar los detalles de la cuenta
export async function fillAccountDetails(page: Page, userData: UserData) {
    await page.click('input[id="id_gender1"]');
    await page.locator('input[id="password"]').fill(userData.password);
    await page.locator('select[id="days"]').selectOption(userData.day);
    await page.locator('select[id="months"]').selectOption(userData.month);
    await page.locator('select[id="years"]').selectOption(userData.year);
    await page.click('input[id="newsletter"]');
    await page.click('input[id="optin"]');
    await page.locator('input[id="first_name"]').fill(userData.firstName);
    await page.locator('input[id="last_name"]').fill(userData.lastName);
    await page.locator('input[id="company"]').fill(userData.company);
    await page.locator('input[id="address1"]').fill(userData.address1);
    await page.locator('input[id="address2"]').fill(userData.address2);
    await page.locator('select[id="country"]').selectOption(userData.country);
    await page.locator('input[id="state"]').fill(userData.state);
    await page.locator('input[id="city"]').fill(userData.city);
    await page.locator('input[id="zipcode"]').fill(userData.zipcode);
    await page.locator('input[id="mobile_number"]').fill(userData.mobileNumber);
}

  // Función para loguear
export async function loggerUser(page: Page, userData: UserData) {
    await page.locator('input[data-qa="login-password"]').fill(userData.password);
    await page.locator('input[data-qa="login-email"]').fill(userData.email);
}

  // Función para loguear
export  async function loggerUserIncorrect(page: Page, userData: UserData) {
    await page.locator('input[data-qa="login-password"]').fill(userData.password);
    await page.locator('input[data-qa="login-email"]').fill(userData.email);
  }

  // Función para signupUser que existe
export  async function signupUserExist(page: Page, userData: UserData) {
    await page.locator('input[data-qa="signup-name"]').fill(userData.name);
    await page.locator('input[data-qa="signup-email"]').fill(userData.email);
    await page.click('button[data-qa="signup-button"]');

  }




  // Función para completar el formulario de contacto
export async function fillContactForm(page: Page, contactUsData: ContactUsData) {
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
export async function enterDescriptionAndPlaceOrder(page,contactUsData: ContactUsData) {
  await page.locator('textarea[class="form-control"]').fill(contactUsData.message);
  await page.click('a[href="/payment"]');
}


export async function enterPaymentDetails(page, paymentDetails: PaymentDetails) {
  await page.locator('input[data-qa="name-on-card"]').fill(paymentDetails.nameOnCard);
  await page.locator('input[data-qa="card-number"]').fill(paymentDetails.cardNumber);
  await page.locator('input[data-qa="cvc"]').fill(paymentDetails.cvc);
  await page.locator('input[data-qa="expiry-month"]').fill(paymentDetails.expiryMonth);
  await page.locator('input[data-qa="expiry-year"]').fill(paymentDetails.expiryYear);
}