# Ejecutar test

npx playwright test <!-- NombreTest.spec-->

npx playwright test <!-- NombreTest.spec--> --debug

# Web Tests Cases

<!--- Test Case 1: Register User -->

npx playwright test TestCase1_RegisterUser.spec

<!--- Test Case 2: Login User with correct email and password -->

npx playwright test TestCase2_LoginUserWithCorrectEmailAndPassword.spec

<!--- Test Case 3: Login User with incorrect email and password -->

npx playwright test TestCase3_LoginUserWithIncorrectEmailAndPassword.spec

<!--- Test Case 4: Logout User -->

npx playwright test TestCase4_LogoutUser.spec

<!--- Test Case 5: Register User with existing email -->

npx playwright test TestCase5_RegisterUserWithExistingEmail.spec

<!--- Test Case 6: Contact Us Form -->

npx playwright test TestCase6_ContactUsForm.spec

<!--- Test Case 7: Verify Test Cases Page -->

npx playwright test TestCase7_VerifyTestCasesPage.spec

<!--- Test Case 8: Verify All Products and product detail page -->

npx playwright test TestCase8_VerifyAllProductsAndProductDetailPage.spec

<!--- Test Case 9: Search Product -->

npx playwright test TestCase9_SearchProduct.spec

<!--- Test Case 10: Verify Subscription in home page -->

npx playwright test TestCase10_VerifySubscriptionInHomePage.spec

<!--- Test Case 11: Verify Subscription in Cart page -->

npx playwright test TestCase11\_ VerifySubscriptionInCartPage.spec

<!--- Test Case 12: Add Products in Cart -->

npx playwright test TestCase12_AddProductsInCart.spec

<!--- Test Case 13: Verify Product quantity in Cart -->

npx playwright test TestCase13_VerifyProductQuantityInCart.spec

<!--- Test Case 14: Place Order: Register while Checkout -->

npx playwright test TestCase14_PlaceOrderRegisterWhileCheckout.spec

<!--- Test Case 15: Place Order: Register before Checkout -->

npx playwright test TestCase15_PlaceOrderRegisterBeforeCheckout.spec

<!--- Test Case 16: Place Order: Login before Checkout -->

npx playwright test TestCase16_PlaceOrderLoginBeforeCheckout.spec

<!--- Test Case 17: Remove Products From Cart -->

npx playwright test TestCase17_RemoveProductsFromCart.spec

<!--- Test Case 18: View Category Products -->

npx playwright test TestCase18_ViewCategoryProducts.spec

<!--- Test Case 19: View & Cart Brand Products -->

npx playwright test TestCase19_View&CartBrandProducts.spec

<!--- Test Case 20: Search Products and Verify Cart After Login -->

npx playwright test TestCase20_SearchProductsAndVerifyCartAfterLogin.spec

<!--- Test Case 21: Add review on product -->

npx playwright test TestCase21_AddReviewOnProduct.spec

<!--- Test Case 22: Add to cart from Recommended items -->

<!--- Test Case 23: Verify address details in checkout page -->

<!--- Test Case 24: Download Invoice after purchase order -->

npx playwright test TestCase24_DownloadInvoiceAfterPurchaseOrder.spec

<!--- Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality -->

npx playwright test TestCase25_VerifyScrollWithArrow.spec

<!--- Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality -->

npx playwright test TestCase26_verifyScrollWithoutArrow.spec

# API Tests Cases

<!--- API 1: Get All Products List -->

npx playwright test TestAPI1_GET_AllProductsList.spec

<!--- API 2: POST To All Products List -->

npx playwright test TestAPI2_POST_ToAllProductsList.spec

<!--- API 4: PUT To All Brands List -->

npx playwright test TestAPI4_PUT_ToAllBrandsList.spec

<!--- API 5: POST To Search Product -->

<!--- API 6: POST To Search Product without search_product parameter -->

<!--- API 7: POST To Verify Login with valid details -->

<!--- API 8: POST To Verify Login without email parameter -->

npx playwright test TestAPI8_POST_ToVerifyLoginWithoutEmailParameter.spec

<!--- API 9: DELETE To Verify Login -->

npx playwright test TestAPI9_DELETE_ToVerifyLogin.spec

<!--- API 10: POST To Verify Login with invalid details -->

<!--- API 11: POST To Create/Register User Account -->

<!--- API 12: DELETE METHOD To Delete User Account -->

<!--- API 13: PUT METHOD To Update User Account -->

<!--- API 14: GET user account detail by email -->

npx playwright test TestAPI14_GET_UserAccountDetailByEmail.spec
