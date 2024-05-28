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
    name: 'NlC098'
  };

  const contactUsData = {
    email: 'user@email.com',
    name: 'user',
    subject: 'asdasd',
    message:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    filePath: 'C:\\Users\\Usuario\\Desktop\\Testing\\tests\\file.txt'
  
  };

  // Función para navegar a la página principal
export async function navigateToHomePage(page: Page) {
    await page.goto(URL);
    const homePageTitle = await page.title();
    if (!homePageTitle.includes('Automation Exercise')) {
      throw new Error('Home page no es visible');
    }
    console.log('Home page es visible successfully');
}
  
  // Función para hacer clic en el botón 'Signup / Login'
export async function clickSignup(page: Page) {
    await page.click('a[href="/login"]');
    const newUserSignupText = await page.textContent('h2:has-text("New User Signup!")');
    if (!newUserSignupText) {
      throw new Error('New User Signup! no es visible');
    }
    console.log('New User Signup! es visible');
}
  
  // Función para registrar un nuevo usuario
export async function registerUser(page: Page) {
    await page.locator('input[data-qa="signup-name"]').fill(registerUserData.name);
    await page.locator('input[data-qa="signup-email"]').fill(registerUserData.email);
    await page.click('button[data-qa="signup-button"]');
    const enterAccountInfoText = await page.textContent('h2:has-text("Enter Account Information")');
    if (!enterAccountInfoText) {
      throw new Error('ENTER ACCOUNT INFORMATION no es visible');
    }
    console.log('ENTER ACCOUNT INFORMATION es visible');
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
    await page.click('button[data-qa="create-account"]');
    const accountCreatedText = await page.textContent('h2:has-text("Account Created!")');
    if (!accountCreatedText) {
      throw new Error('ACCOUNT CREATED! no es visible');
    }
    console.log('ACCOUNT CREATED! es visible');
    await page.click('a[data-qa="continue-button"]');
}
  
  // Función para verificar que el usuario está logueado y eliminar la cuenta
export async function verifyLoggedInAndDeleteAccount(page: Page) {
    
    const loggedInAsText = await page.textContent(`a:has-text("Logged in as ")`);
    if (!loggedInAsText) {
      throw new Error('Logged in as username no es visible');
    }
    console.log('Logged in as username es visible');
    await page.click('a[href="/delete_account"]');
    const accountDeletedText = await page.textContent('h2:has-text("Account Deleted!")');
    if (!accountDeletedText) {
      throw new Error('ACCOUNT DELETED! no es visible');
    }
    console.log('ACCOUNT DELETED! es visible');
    await page.click('a[data-qa="continue-button"]');
}

  // Función para hacer clic en el botón 'Signup / Login'
export async function clickLogin(page: Page) {
    await page.click('a[href="/login"]');
    const newUserLoginText = await page.textContent('h2:has-text("Login to your account")');
    if (!newUserLoginText) {
      throw new Error('Login to your account! no es visible');
    }
    console.log('Login to your account! es visible');
}

  // Función para loguear
export async function loggerUser(page: Page) {
    await page.locator('input[data-qa="login-password"]').fill(userLoginData.password);
    await page.locator('input[data-qa="login-email"]').fill(userLoginData.email);
    await page.click('button[data-qa="login-button"]');
}

  // Función para loguear
export  async function loggerUserIncorrect(page: Page) {
    await page.locator('input[data-qa="login-password"]').fill(userLoginIncorrectData.password);
    await page.locator('input[data-qa="login-email"]').fill(userLoginIncorrectData.email);
    await page.click('button[data-qa="login-button"]');
    const errorLogin = await page.textContent('p:has-text("Your email or password is incorrect!")');
    if (!errorLogin) {
        throw new Error('Your email or password is incorrect! no es visible');
      }
      console.log('Your email or password is incorrect! es visible');
  }


  // Función para verificar que el usuario está logueado y luego logout
export async function verifyLoggedInAndLogoutAccount(page: Page) {
    const loggedInAsText = await page.textContent(`a:has-text("Logged in as ")`);
    if (!loggedInAsText) {
      throw new Error('Logged in as username no es visible');
    }
    console.log('Logged in as username es visible');
    await page.click('a[href="/logout"]');
    const newUserSignupText = await page.textContent('h2:has-text("Login to your account")');
    if (!newUserSignupText) {
      throw new Error('Login to your account! no es visible');
    }
    console.log('Login to your account! es visible');
  }


  // Función para loguear
export  async function signupUser(page: Page) {
    await page.locator('input[data-qa="signup-name"]').fill(userSignupData.name);
    await page.locator('input[data-qa="signup-email"]').fill(userSignupData.email);
    await page.click('button[data-qa="signup-button"]');
    const errorsignup = await page.textContent('p:has-text("Email Address already exist!")');
    if (!errorsignup) {
        throw new Error('Email Address already exist! no es visible');
      }
      console.log('Email Address already exist! es visible');
  }


   // Función para hacer clic en el botón 'Contact Us'
export async function clickContactUs(page: Page) {
    await page.click('a[href="/contact_us"]');
    await page.waitForSelector('h2:has-text("Get In Touch")');
    const getInTouchText = await page.textContent('h2:has-text("Get In Touch")');
    if (!getInTouchText) {
      throw new Error('GET IN TOUCH no es visible');
    }
    console.log('GET IN TOUCH es visible');
  }


  // Función para completar el formulario de contacto
export async function fillContactForm(page: Page) {
    await page.locator('input[data-qa="name"]').fill(contactUsData.name);
    await page.locator('input[data-qa="email"]').fill(contactUsData.email);
    await page.locator('input[data-qa="subject"]').fill(contactUsData.subject);
    await page.locator('textarea[data-qa="message"]').fill(contactUsData.message);
    await page.locator('input[name="upload_file"]').setInputFiles(contactUsData.filePath);
  }

  // Función para enviar el formulario y verificar el mensaje de éxito
export async function submitAndVerifyForm(page: Page) {
    page.on('dialog', async dialog => {
        console.log('Dialog message:', dialog.message());
        await new Promise(resolve => setTimeout(resolve, 2000));
        await dialog.accept();
    });
    await page.click('input[data-qa="submit-button"]');
    await page.waitForSelector('div:has-text("Success! Your details have been submitted successfully.")', { timeout: 10000 });
    const successMessage = await page.textContent('div:has-text("Success! Your details have been submitted successfully.")');
    if (!successMessage) {
      throw new Error('El mensaje de éxito no es visible');
    }
    console.log('El mensaje de éxito es visible');
  }

  // Función para volver a la página principal
export async function clickHomeButtonAndVerify(page: Page) {
    await page.click('a:has-text("Home")');
    const homePageTitle = await page.title();
    if (!homePageTitle.includes('Automation Exercise')) {
      throw new Error('Home page no es visible');
    }
    console.log('Home page es visible successfully');
  }